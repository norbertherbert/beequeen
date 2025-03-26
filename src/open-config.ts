import {PARAMS_AT3} from './abw/params_at3.js';
import { AT3_Combo_Default_Conf } from './assets/config_templates/AT3_Combo_Default_Conf';


const default_conf_params = parse_config_file(AT3_Combo_Default_Conf);

export async function open_template_config_file(): Promise<Record<string, string|null>> {
    // const content = await fetch('AT3_Combo_Default_Conf.txt');
    // const text = await content.text()

    const limited_default_conf_params = {...default_conf_params}
    limited_default_conf_params.sys_highest_temperature = null;
    limited_default_conf_params.sys_lowest_temperature = null;
    limited_default_conf_params.sys_power_consumption = null;
    limited_default_conf_params.sys_cli_password = null;   
    // delete limited_default_conf_params.sys_highest_temperature;
    // delete limited_default_conf_params.sys_lowest_temperature;
    // delete limited_default_conf_params.sys_power_consumption;
    // delete limited_default_conf_params.sys_cli_password;

    return limited_default_conf_params;

}


function parse_config_file(contents: string): Record<string, string|null> {

    const lines = contents
        .split(/\r?\n/)
        // .split( /[\r\n]+/ )
        .filter( line => line=='' ? false : true )
        .map( line => line.split('#')[0].trim() );

    const parameters: Record<string, string> = {};

    for (const line of lines) {

        const segments = line.split('=');
        if (segments.length != 2) {
            console.log(`ERROR IN CONFIGURATION FILE: ${line}\n> Line ignored`);
            continue;
        }
        
        let [paramName, paramValue] = segments;
        paramName = paramName.trim();
        paramValue = paramValue.trim();


        const foundParam = Object.values(PARAMS_AT3).find(param => param.name == paramName);
        // const foundParam: [string, number, string]|undefined = PARAMS_AT3_INDEX.find(param => param[0] == paramName);
        if (foundParam == undefined) { 
            console.log(`ERROR IN CONFIGURATION FILE: ${line}\n> Line ignored`);
            continue;
        }

        // paramObj.type = foundParam[2];

        // let paramValue;
        
        switch (foundParam.type) {
            case 'i32':
            case 'options': 
            case 'bitmap_options':
            case 'i32_options':
                break;

            case 'string':
                
                if ((paramValue.slice(0,1) != '"') && (paramValue.slice(-1) != '"')) {
                    console.log(`ERROR IN CONFIGURATION FILE (Expected format is "abdc"): ${line}\n> Line ignored`);
                    continue;
                }
                paramValue = paramValue.slice(1, -1).trim();
                break;

            case 'bytearray':
            case 'bytearray_options':
            case 'bytearray_bitmap':
            case 'bytearray_beacon_id':
            case 'bytearray_search_bands':

                if ((paramValue.slice(0,1) != '"') && (paramValue.slice(-1) != '"')) {
                    console.log(`ERROR IN CONFIGURATION FILE (Expected format is "{aa,bb,cc,...}"): ${line}\n> Line ignored`);
                    continue;
                }
                paramValue = paramValue.slice(1, -1).trim();
                break;

            default:
                continue;
        }

        parameters[paramName] = paramValue;

    }

    return parameters;

}


export async function open_config_file(): Promise< { file_name: string, config_params: Record<string, string|null> } > {

    const options: OpenFilePickerOptions = {
        types: [
            {
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
            },
        ],
    };
    const [fileHandle] = await window.showOpenFilePicker(options);
    const file = await fileHandle.getFile();
    const contents = await file.text();

    const parameters = parse_config_file(contents);
    
    const limited_default_conf_params = {...default_conf_params}
    limited_default_conf_params.sys_highest_temperature = null;
    limited_default_conf_params.sys_lowest_temperature = null;
    limited_default_conf_params.sys_power_consumption = null;
    limited_default_conf_params.sys_cli_password = null;   
    // delete limited_default_conf_params.sys_highest_temperature;
    // delete limited_default_conf_params.sys_lowest_temperature;
    // delete limited_default_conf_params.sys_power_consumption;
    // delete limited_default_conf_params.sys_cli_password;

    return { file_name: file.name, config_params: {...limited_default_conf_params, ...parameters} };

}


export async function save_config_file(config_params: Record<string, string|null>, deltaConfig: boolean): Promise<string> {

    let cfg_file_entries = Object.entries(config_params);

    if (deltaConfig) {
        cfg_file_entries = cfg_file_entries.filter( 
            ([key, val]: [string, string|null]) => default_conf_params[key]?.toString().toLowerCase() !== val 
        )
    }
    
    if (cfg_file_entries.length == 0) return "";

    const cfg_file_str = cfg_file_entries
        .filter(([, val]: [string, string|null]) => (val !== null) )
        .map(([key, val]: [string, string|null]) => {

            const foundParam = Object.values(PARAMS_AT3).find(param => param.name == key);

            if (foundParam !== undefined) { 

                switch (foundParam.type) {
                    case 'i32':
                    case 'options': 
                    case 'bitmap_options':
                    case 'i32_options':
                        return `${key} = ${val}`;
        
                    case 'string':      
                    case 'bytearray':
                    case 'bytearray_options':
                    case 'bytearray_bitmap':
                    case 'bytearray_beacon_id':
                    case 'bytearray_search_bands':
                        return `${key} = "${val}"`;
        
                    default:
                        return `${key} = ${val}`;
                }

            } else {
                return `${key} = ${val}`;
            }
 
            // if (['cell_access_point_name', 'cell_operator_sim_slot_0', 'cell_operator_sim_slot_1', 'cell_s1_ip_url_addr'].includes(key)) {
            //     return `${key} = "${val}"`
            // } else {
            //     return `${key} = ${val}`
            // }

        })   
        .reduce(
            (cfg_file_str, cfg_file_line) => cfg_file_str + cfg_file_line + '\r\n',
            ''
        );

    const cfg_file_blob = new Blob([cfg_file_str], {type: 'text/plain'});
    const dateString = new Date().toISOString().slice(0, 16);
    const pickerOptions: SaveFilePickerOptions = {
        suggestedName: deltaConfig ? `AT3_${dateString}_delta.txt`: `AT3_${dateString}.txt`,
        types: [
            {
            description: 'Abeeway Configuration File',
            accept: {
                'text/plain': ['.txt'],
            },
            },
        ],
    };
    
    const fileHandle = await window.showSaveFilePicker(pickerOptions);
    const fileName = (await fileHandle.getFile()).name;
    const writableFileStream = await fileHandle.createWritable();
    await writableFileStream.write(cfg_file_blob);
    await writableFileStream.close();

    return fileName;

}

export async function export_as_production_config_file(config_params: Record<string, string|null>, deltaConfig: boolean): Promise<string> {

    let cfg_file_entries = Object.entries(config_params);

    if (deltaConfig) {
        cfg_file_entries = cfg_file_entries.filter( 
            ([key, val]: [string, string|null]) => default_conf_params[key]?.toString().toLowerCase() !== val 
        )
    }
    
    if (cfg_file_entries.length == 0) return "";

    let cfg_file_str = 'CONFIGURATION\r\nVERSION 1.0.0.1\r\n';
    cfg_file_str += cfg_file_entries
        .filter(([, val]: [string, string|null]) => (val !== null) )
        .map(([key, val]: [string, string|null]) => {

            const foundParam = Object.values(PARAMS_AT3).find(param => param.name == key);

            if (foundParam !== undefined) {

                const param_code = 'P' + foundParam.id.toString(16).padStart(4,'0');

                switch (foundParam.type) {
                    case 'i32':
                    case 'options': 
                    case 'bitmap_options':
                    case 'i32_options':
                    case 'bytearray':
                    case 'bytearray_options':
                    case 'bytearray_bitmap':
                    case 'bytearray_beacon_id':
                    case 'bytearray_search_bands':
                        return `${param_code}=${val}`;
        
                    case 'string':
                        return `${param_code}="${val}"`;
        
                    default:
                        return `${param_code}=${val}`;
                }

            } else {
                return '';
            }

        })   
        .reduce(
            (cfg_file_str, cfg_file_line) => cfg_file_str + cfg_file_line + '\n',
            ''
        );

    const cfg_file_blob = new Blob([cfg_file_str], {type: 'text/plain'});
    const dateString = new Date().toISOString().slice(0, 16);
    const pickerOptions: SaveFilePickerOptions = {
        suggestedName: deltaConfig ? `AT3_${dateString}_delta.conf`: `AT3_${dateString}.conf`,
        types: [
            {
            description: 'Abeeway Production Configuration File',
            accept: {
                'text/plain': ['.conf'],
            },
            },
        ],
    };
    
    const fileHandle = await window.showSaveFilePicker(pickerOptions);
    const fileName = (await fileHandle.getFile()).name;
    const writableFileStream = await fileHandle.createWritable();
    await writableFileStream.write(cfg_file_blob);
    await writableFileStream.close();

    return fileName;

}