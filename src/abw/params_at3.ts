

export const PARAMS_AT3_INDEX: [string, number, string][] = [
    ["sys_highest_temperature", 0x0000, "i32"], 
    ["sys_lowest_temperature", 0x0001, "i32"], 
    ["sys_power_consumption", 0x0002, "i32"],
    ["sys_cli_password", 0x0003, "i32"], 

    ["core_monitoring_period", 0x0100, "i32"], 
    ["core_status_period", 0x0101, "i32"], 
    ["core_notif_enable", 0x0102, "array"], 
    ["core_temp_high_threshold", 0x0103, "i32"], 
    ["core_temp_low_threshold", 0x0104, "i32"], 
    ["core_temp_hysteresis", 0x0105, "i32"], 
    ["core_button1_map", 0x0106, "i32"], 
    ["core_button2_map", 0x0107, "i32"], 
    ["core_buttons_timing", 0x0108, "i32"], 
    ["core_led0_map", 0x0109, "array"], 
    ["core_led1_map", 0x010a, "array"], 
    ["core_buzzer_map", 0x010b, "array"], 
    ["core_almanac_validity", 0x010c, "i32"], 
    ["core_almanac_outdated_ratio", 0x010d, "i32"], 

    ["geoloc_motion_period", 0x0200, "i32"], 
    ["geoloc_static_period", 0x0201, "i32"], 
    ["geoloc_sos_period", 0x0202, "i32"], 
    ["geoloc_motion_nb_start", 0x0203, "i32"], 
    ["geoloc_motion_nb_stop", 0x0204, "i32"], 
    ["geoloc_start_stop_period", 0x0205, "i32"], 
    ["geoloc_gnss_hold_on_mode", 0x0206, "i32"], 
    ["geoloc_gnss_hold_on_timeout", 0x0207, "i32"], 
    ["geoloc_profile0_triggers", 0x0208, "i32"], 
    ["geoloc_profile1_triggers", 0x0209, "i32"], 
    ["geoloc_profile2_triggers", 0x020a, "i32"], 
    ["geoloc_gbe_profile0_techno", 0x020b, "array"], 
    ["geoloc_gbe_profile1_techno", 0x020c, "array"], 
    ["geoloc_gbe_profile2_techno", 0x020d, "array"], 

    ["gnss_constellation", 0x0300, "i32"], 
    ["gnss_max_time", 0x0301, "i32"], 
    ["gnss_t0_timeout_static", 0x0302, "i32"], 
    ["gnss_ehpe_static", 0x0303, "i32"], 
    ["gnss_convergence_static", 0x0304, "i32"], 
    ["gnss_t0_timeout_motion", 0x0305, "i32"], 
    ["gnss_ehpe_motion", 0x0306, "i32"], 
    ["gnss_convergence_motion", 0x0307, "i32"], 
    ["gnss_standby_time", 0x0308, "i32"], 
    ["gnss_agnss_max_time", 0x0309, "i32"], 
    ["gnss_t1_timeout", 0x030a, "i32"], 

    ["lr_constellation", 0x0400, "i32"], 
    ["lr_scan_mode", 0x0401, "i32"], 
    ["lr_nb_scan", 0x0402, "i32"], 
    ["lr_inter_scan_time", 0x0403, "i32"], 
    ["lr_wifi_report_nb_bssid", 0x0404, "i32"], 
    ["lr_wifi_min_nb_bssid", 0x0405, "i32"], 
    ["lr_wifi_min_rssi", 0x0406, "i32"], 
    ["lr_wifi_bssid_mac_type", 0x0407, "i32"], 

    ["ble_scan1_duration", 0x0500, "i32"], 
    ["ble_scan1_window", 0x0501, "i32"], 
    ["ble_scan1_interval", 0x0502, "i32"], 
    ["ble_scan1_type", 0x0503, "i32"], 
    ["ble_scan1_min_rssi", 0x0504, "i32"], 
    ["ble_scan1_min_nb_beacons", 0x0505, "i32"], 
    ["ble_scan1_filter1_mask", 0x0506, "array"], 
    ["ble_scan1_filter1_value", 0x0507, "array"], 
    ["ble_scan1_filter1_offset", 0x0508, "i32"], 
    ["ble_scan1_filter2_mask", 0x0509, "array"], 
    ["ble_scan1_filter2_value", 0x050a, "array"], 
    ["ble_scan1_filter2_offset", 0x050b, "i32"], 
    ["ble_scan1_nb_beacons", 0x050c, "i32"], 
    ["ble_scan1_report_type", 0x050d, "i32"], 
    ["ble_scan1_report_id_ofs", 0x050e, "i32"], 
    
    ["ble_scan2_duration", 0x0600, "i32"], 
    ["ble_scan2_window", 0x0601, "i32"], 
    ["ble_scan2_interval", 0x0602, "i32"], 
    ["ble_scan2_type", 0x0603, "i32"], 
    ["ble_scan2_min_rssi", 0x0604, "i32"], 
    ["ble_scan2_min_nb_beacons", 0x0605, "i32"], 
    ["ble_scan2_filter1_mask", 0x0606, "array"], 
    ["ble_scan2_filter1_value", 0x0607, "array"], 
    ["ble_scan2_filter1_offset", 0x0608, "i32"], 
    ["ble_scan2_filter2_mask", 0x0609, "array"], 
    ["ble_scan2_filter2_value", 0x060a, "array"], 
    ["ble_scan2_filter2_offset", 0x060b, "i32"], 
    ["ble_scan2_nb_beacons", 0x060c, "i32"], 
    ["ble_scan2_report_type", 0x060d, "i32"], 
    ["ble_scan2_report_id_ofs", 0x060e, "i32"], 

    ["accelero_motion_sensi", 0x0700, "i32"], 
    ["accelero_motion_duration", 0x0701, "i32"], 
    ["accelero_full_scale", 0x0702, "i32"], 
    ["accelero_output_data_rate", 0x0703, "i32"], 
    ["accelero_shock_threshold", 0x0704, "i32"], 

    ["net_selection", 0x0800, "i32"], 
    ["net_reconnection_spacing", 0x0801, "i32"], 
    ["net_main_probe_timeout", 0x0802, "i32"], 

    ["lorawan_cnx_timeout", 0x0900, "i32"], 
    ["lorawan_dl_trigger_period", 0x0901, "i32"], 
    ["lorawan_probe_max_attempts", 0x0902, "i32"], 
    ["lorawan_probe_period", 0x0903, "i32"], 
    ["lorawan_confirm_notif_map", 0x0904, "array"], 
    ["lorawan_confirm_notif_retry", 0x0905, "i32"], 
    ["lorawan_s1_tx_strategy", 0x0906, "i32"], 
    ["lorawan_s1_ul_port", 0x0907, "i32"], 
    ["lorawan_s1_dl_port", 0x0908, "i32"], 

    ["cell_sim_interface", 0x0a00, "i32"], 
    ["cell_network_type", 0x0a01, "i32"], 
    ["cell_search_bands", 0x0a02, "array"], 
    ["cell_cnx_timeout_static", 0x0a03, "i32"], 
    ["cell_cnx_timeout_motion", 0x0a04, "i32"], 
    ["cell_nw_lost_timeout", 0x0a05, "i32"], 
    ["cell_cnx_max_attempts", 0x0a06, "i32"], 
    ["cell_access_point_name", 0x0a07, "string"], 
    ["cell_operator_sim_slot_0", 0x0a08, "string"],
    ["cell_operator_sim_slot_1", 0x0a09, "string"],
    ["cell_low_power_mode", 0x0a0a, "i32"], 
    ["cell_psm_tau_period", 0x0a0b, "i32"], 
    ["cell_psm_active_time", 0x0a0c, "i32"], 
    ["cell_edrx_pcl", 0x0a0d, "i32"], 
    ["cell_edrx_ptw", 0x0a0e, "i32"], 
    ["cell_rai_timeout", 0x0a0f, "i32"], 
    ["cell_max_probe_attempts", 0x0a10, "i32"], 
    ["cell_probe_period", 0x0a11, "i32"], 
    ["cell_s1_transport_proto", 0x0a12, "i32"], 
    ["cell_s1_ip_url_addr", 0x0a13, "string"],
    ["cell_s1_dst_ip_port", 0x0a14, "i32"], 
    ["cell_s1_src_ip_port", 0x0a15, "i32"], 
    ["cell_s1_tx_aggr_time", 0x0a16, "i32"], 

    ["ble_cnx_tx_power", 0x0b00, "i32"], 
    ["ble_cnx_adv_duration", 0x0b01, "i32"], 
    ["ble_cnx_behavior", 0x0b02, "i32"], 
    ["ble_beacon_tx_power", 0x0b03, "i32"], 
    ["ble_beacon_type", 0x0b04, "i32"], 
    ["ble_beacon_identifier", 0x0b05, "array"], 
    ["ble_beacon_fast_adv_interval", 0x0b06, "i32"], 
    ["ble_beacon_slow_adv_interval", 0x0b07, "i32"], 
];





export type Optionally_saved_param_val = {
    save_it_to_config_file: boolean,
    val: number,
}
export type Optionally_saved_param_str = {
    save_it_to_config_file: boolean,
    str: string,
}


export type Option_vals = Record<string, {desc: string, val: number}>
export type Option_ids = Record<string, {desc: string, id: number}>
export type Option_bits = Record<string, {desc: string, bit: number}>
export type Bit_offsets = Record<string, {desc: string, bit_offset: number, bit_length: number, unit?: string}>

export interface Result<T, E> {
    val: T|undefined,
    err: E|undefined,
}


export interface Param {
    id: number,
    name: string,
    title: string,
    desc: string,
    type: string,
}


export interface Param_i32 extends Param {
    min_val: number,
    max_val: number,
    default_val: number,
    unit: string,
}

export interface Optionally_saved_param_i32 extends Param {
    min_val: number,
    max_val: number,
    default_val: Optionally_saved_param_val,
    unit: string,
}

export interface Param_options extends Param {
    options: Option_vals,
    default_val: number,
}

export interface Param_bytearray extends Param {
    len: number,
    default_val: string,
}

export interface Param_string extends Param {
    default_val: string,
}

export interface Param_core_notif_XXX extends Param {
    len: number,
    default_val: Notif_bitmap_gui_val,
}

export interface Param_core_buttonX_map extends Param {
    default_val: Button_map_gui_val,
}

export interface Param_core_buttons_timing extends Param {
    default_val: Button_timing_gui_val,
}

export interface Param_core_ledX_map extends Param {
    len: number,
    default_val: Led_map_gui_val_item[],
}

export interface Param_core_buzzer_map extends Param {
    len: number,
    default_val: Buzzer_map_gui_val_item[],
}

export interface Param_geoloc_profileX_triggers extends Param {
    default_val: Geoloc_profile_triggers_gui_val,
}

export interface Param_geoloc_gbe_profileX_techno extends Param {
    len: number,
    default_val: Geoloc_technologies_gui_val_item[],
}

export interface Param_lorawan_s1_tx_strategy extends Param  {
    default_val: Lorawan_s1_tx_strategy_gui_val,
}

export interface Param_cell_search_bands extends Param {
    len: number,
    default_val: number[],
}

export interface Param_cell_psm_time_XXX extends Param {
    time_units: Option_vals,
    default_val: Cell_psm_time_gui_val,
}


export type Param_type = Param_i32 | Optionally_saved_param_i32 | Param_options | Param_bytearray | Param_string | 
    Param_core_notif_XXX | Param_core_buttonX_map | Param_core_buttons_timing | Param_core_ledX_map |
    Param_core_buzzer_map | Param_geoloc_profileX_triggers | Param_geoloc_gbe_profileX_techno |
    Param_lorawan_s1_tx_strategy | Param_cell_search_bands | Param_cell_psm_time_XXX;


export interface Notif_bitmap_gui_val {
    sys_status: boolean,
    sys_low_battery: boolean,
    sys_ble: boolean,
    sys_tamper: boolean,
    sys_heartbeat: boolean,

    sos_on: boolean,
    sos_off: boolean,

    temp_high: boolean,
    temp_low: boolean,
    temp_normal: boolean,

    acc_motion_start: boolean,
    acc_motion_end: boolean,
    acc_shock: boolean,

    nwk_main_up: boolean,
    nwk_backup_up: boolean,

    geozone_entry: boolean,
    geozone_exit: boolean,
    geozone_in_hazard: boolean,
    geozone_out_hazard: boolean,
    geozone_meeting_point: boolean
}

export interface Button_map_gui_val {
    press: number,
    long_press: number,
    single_click: number,
    double_click: number,
    tripple_click: number,
    button_sequence: number,
}

export interface Button_timing_gui_val {
    duration_of_press: number,
    duration_diff_of_long_press: number,
    button1_debounce_time: number,
    button2_debounce_time: number,
}

export interface Button_timing_gui_str {
    duration_of_press: string,
    duration_diff_of_long_press: string,
    button1_debounce_time: string,
    button2_debounce_time: string,
}

export interface Led_map_gui_str_item {
    pattern: number,
    inverted: boolean,
    count: string,
    event: number,
}

export interface Led_map_gui_val_item {
    pattern: number,
    inverted: boolean,
    count: number,
    event: number,
}

export interface Buzzer_map_gui_str_item {
    melody: number,
    count: string,
    event: number,
}

export interface Buzzer_map_gui_val_item {
    melody: number,
    count: number,
    event: number,
}

export interface Geoloc_profile_triggers_gui_val {
    pod: boolean,
    sos: boolean,
    motion_start: boolean,
    motion_stop: boolean,
    in_motion: boolean,
    in_static: boolean,
    shock: boolean,
    temp_high_threshold: boolean,
    temp_low_threshold: boolean,
    geozoning: boolean,
}

export interface Geoloc_technologies_gui_val_item {
    techno: number,
    always_triggered: boolean,
}

export interface Cell_psm_time_gui_str {
    number_of_time_units: string,
    time_unit: number,
}

export interface Cell_psm_time_gui_val {
    number_of_time_units: number,
    time_unit: number,
}

export interface Lorawan_s1_tx_strategy_gui_val {
    adr_enabled: boolean,
    dual_tr_static: boolean,
    dual_tr_motion: boolean,
    auto_inc_dr_if_oversized: boolean,
    // rfu4: boolean,
    // rfu5: boolean,
    // rfu6: boolean,
    // rfu7: boolean,

    _1st_tr_dr0: boolean,
    _1st_tr_dr1: boolean,
    _1st_tr_dr2: boolean,
    _1st_tr_dr3: boolean,
    _1st_tr_dr4: boolean,
    _1st_tr_dr5: boolean,
    _1st_tr_dr6: boolean,
    _1st_tr_dr7: boolean,

    _2nd_tr_dr0: boolean,
    _2nd_tr_dr1: boolean,
    _2nd_tr_dr2: boolean,
    _2nd_tr_dr3: boolean,
    _2nd_tr_dr4: boolean,
    _2nd_tr_dr5: boolean,
    _2nd_tr_dr6: boolean,
    _2nd_tr_dr7: boolean,
}






export const I32_MIN = -2147483648; // 0x80000000
export const I32_MAX = 2147483647;  // 0x7fffffff
export const U32_MIN = 0;           // 0x00000000
export const U32_MAX = 4294967295;  // 0xffffffff

export function i32_to_u32(i32: number): number {
    if ((i32 < I32_MIN) || (i32 > I32_MAX)) {
        throw new Error('the value is out of the range of 32 bit signed integers');
    } else {
        return Uint32Array.from(Int32Array.of(i32))[0];
    }
}

export function u32_to_i32(u32: number): number {
    if ((u32 < U32_MIN) || (u32 > U32_MAX)) {
        throw new Error('the value is out of the range of 32 bit unsigned integers');
    } else {
        return Int32Array.from(Uint32Array.of(u32))[0];
    }
}

export function parse_txt_as_i32(txt: string): {i32_num: number, u32_hex: string} {
    if (REGEXP_DEC_NUM_STR.test(txt)) {
        
        const i32_num = parseInt(txt);
        const u32_num = i32_to_u32(i32_num);

        return {
            i32_num,
            u32_hex: '0x' + u32_num.toString(16).padStart(8, '0'),
        }

    } else if (REGEXP_HEX_NUM_STR.test(txt)) {

        const u32_num = parseInt(txt);
        const i32_num = u32_to_i32(u32_num);

        return {
            i32_num,
            u32_hex: '0x' + u32_num.toString(16).padStart(8, '0'),
        }

    } else {
        throw new Error('invalid number format, must be either an unsigned hexadecimal or signed decimal 32 bit integer');
    }

}

export const REGEXP_HEXBYTE = /^[A-Fa-f0-9]{2}$/;
export const REGEXP_HEXSTRING = /^[A-Fa-f0-9]+$/;
export const REGEXP_HEX_NUM_STR = /^0[xX][A-Fa-f0-9]+$/;
export const REGEXP_DEC_NUM_STR = /^[+-]?\d+$/;
export const REGEXP_DEC_NUM_STR1 = /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;

export const NOTIFICATIONS: Option_ids = {

    sys_status: {id: 0x0000, desc: "System status"},
    sys_low_battery: {id: 0x0001, desc: "Low battery detected"},
    sys_ble: {id: 0x0002, desc: "BLE securely connected"},
    sys_tamper: {id: 0x0003, desc: "Tamper detection"},
    sys_heartbeat: {id: 0x0004, desc: "Heartbeat message"},

    sos_on: {id: 0x0100, desc: "SOS activated"},
    sos_off: {id: 0x0101, desc: "SOS deactivated"},

    temp_high: {id: 0x0200, desc: "Critically high temperature reached"},
    temp_low: {id: 0x0201, desc: "Critically low temperature reached"},
    temp_normal: {id: 0x0202, desc: "Temperature back to normal"},

    acc_motion_start: {id: 0x0300, desc: "Motion start detected"},
    acc_motion_end: {id: 0x0301, desc: "Motion end detected"},
    acc_shock: {id: 0x0302, desc: "Shock detected"},

    nwk_main_up: {id: 0x0400, desc: "Main network is up"},
    nwk_backup_up: {id: 0x0401, desc: "Main network down. Backup is up"},

    geozone_entry: {id: 0x0500, desc: "Entry beacon detected"},
    geozone_exit: {id: 0x0501, desc: "Exit beacon detected"},
    geozone_in_hazard: {id: 0x0502, desc: "Entry in a hazardous area detected"},
    geozone_out_hazard: {id: 0x0503, desc: "Exit from a hazardous area detected"},
    geozone_meeting_point: {id: 0x0504, desc: "Meeting point detected"}

};

export const EVENTS: Option_ids = {

    btn1_press: { id: 0x0000, desc: "Button1 press" },
    btn1_long_press: { id: 0x0001, desc: "Button1 long press" },
    btn1_1_click: { id: 0x0002, desc: "Button1 single click" },
    btn1_2_click: { id: 0x0003, desc: "Button1 double click " },
    btn1_3_click: { id: 0x0004, desc: "Button1 triple click" },
    btn1_seq_reset: { id: 0x0005, desc: "Button1 reset sequence" },
    btn1_seq_bond_del: { id: 0x0006, desc: "Button1 bond delete sequence" },
    btn1_seq_ble_boot: { id: 0x0007, desc: "Button1 BLE bootloader sequence" },
    btn1_ble_connectivity: { id: 0x0008, desc: "Button1 event to start connectivity" },
    
    btn2_press: { id: 0x0100, desc: "Button2 press" },
    btn2_long_press: { id: 0x0101, desc: "Button2 long press" },
    btn2_1_click: { id: 0x0102, desc: "Button2 single click" },
    btn2_2_clicks: { id: 0x0103, desc: "Button2 double click" },
    btn2_3_clicks: { id: 0x0104, desc: "Button2 triple click" },
    btn2_seq_reset: { id: 0x0105, desc: "Button2 reset sequence" },
    btn2_seq_bond_del: { id: 0x0106, desc: "Button2 bond delete sequence" },
    btn2_seq_ble_boot: { id: 0x0107, desc: "Button2 BLE bootloader sequence" },
    btn2_ble_connectivity: { id: 0x0108, desc: "Button2 event to start connectivity" },
    
    buzzer_on: { id: 0x0200, desc: "The buzzer is playing" },
    buzzer_off: { id: 0x0201, desc: "The buzzer is no more playing" },
    
    acc_motion_start: { id: 0x0300, desc: "Motion start detected" },
    acc_motion_end: { id: 0x0301, desc: "Motion end detected." },
    acc_shock_detected: { id: 0x0302, desc: "A shock detected" },
    
    power_battery_low: { id: 0x0400, desc: "Critically low battery level detected" },
    power_charging: { id: 0x0401, desc: "Battery is charging" },
    power_not_charging: { id: 0x0402, desc: "Battery is no more charging" },
    
    temp_normal: { id: 0x0500, desc: "Temperature back to normal" },
    temp_low: { id: 0x0501, desc: "Temperature low" },
    temp_high: { id: 0x0502, desc: "Temperature high" },
    
    geoloc_start: { id: 0x0600, desc: "Geolocation has started" },
    geoloc_done: { id: 0x0601, desc: "Geolocation is done" },
    geoloc_abort: { id: 0x0602, desc: "Geolocation aborted" },
    geoloc_timeout_acq: { id: 0x0603, desc: "Geolocation timeout" },
    geoloc_timeout_hold: { id: 0x0604, desc: "GNSS hold mode timeout" },
    geoloc_gnss_timeout_in_hold: { id: 0x0605, desc: "GNSS timeout in hold mode" },
    geoloc_geozoning_in: { id: 0x0606, desc: "Geozoning indoor event" },
    geoloc_geozoning_out: { id: 0x0607, desc: "Geozoning outdoor event" },
    
    config_change: { id: 0x070, desc: "A configuration change" },
    
    network_main_up: { id: 0x0800, desc: "Main network up" },
    network_backup_up: { id: 0x0801, desc: "Backup network up" },
    network_down: { id: 0x0802, desc: "Network is down" },
    network_hold: { id: 0x0803, desc: "Network is temporarily down" },
    network_pipe1_up: { id: 0x0804, desc: "Data pipe 1 up" }, // "Data pipe 1 up. Traffic accepted on this pipe." },
    network_pipe1_down: { id: 0x0805, desc: "Data pipe 1 down" }, // "Data pipe 1 down. Traffic refused on this pipe." },
    network_pipe1_rx_data: { id: 0x0806, desc: "Data pipe 1 has RX data" },
    
    core_app_init_done: { id: 0x0900, desc: "App initialization finished" },
    core_off: { id: 0x0901, desc: "Core App in Off State" },
    core_skip_off: { id: 0x0902, desc: "Core App was blocked to go Off State" }, // "The core app was expected to move in off mode but the configuration prevents it" },
    core_running: { id: 0x0903, desc: "Core App is running" },
    core_hold: { id: 0x0904, desc: "Core App in Hold State" }, //"The core application moved to the hold state. Reserved for future use." },
    core_time_update: { id: 0x0905, desc: "The system time has been updated" },
    core_device_start: { id: 0x0906, desc: "A start action for the core has been issued" },
    core_device_stop: { id: 0x0907, desc: "A stop action for the core has been issued" },
    core_sos_start: { id: 0x0908, desc: "A SOS start action has been issued" },
    core_sos_stop: { id: 0x0909, desc: "A SOS stop action has been issued" },
    core_status_ul: { id: 0x09010, desc: "Status uplink has been requested" }, // "The sending of a status uplink has been requested" },
    core_monitoring: { id: 0x09011, desc: "Monitoring timeout" }, // "The timeout of the monitoring timer has elapsed" },
    core_pod: { id: 0x09012, desc: "A position on demand requested" },
    core_refresh_alm: { id: 0x09013, desc: "Almanac refresh" },
    core_tamper_on: { id: 0x09014, desc: "Tacker casing is open" },
    core_tamper_off: { id: 0x09015, desc: "Tacker casing is closed" },
    core_gnss_timeout: { id: 0x09016, desc: "GNSS core timeout" },
    core_battery_level: { id: 0x09017, desc: "Show battery level" },
    
    ble_conn_start: { id: 0x0A00, desc: "Start BLE advertisement" },
    ble_conn_stop: { id: 0x0A01, desc: "Stop BLE connectivity" },
    ble_conn_idle: { id: 0x0A02, desc: "No BLE connection nor advertisement" },
    ble_conn_fast_adv: { id: 0x0A03, desc: "Fast BLE adv. for connectivity" },
    ble_conn_slow_adv: { id: 0x0A04, desc: "Slow BLE adv. for connectivity" },
    ble_connected: { id: 0x0A05, desc: "BLE is in the connection state" },
    ble_bonded: { id: 0x0A06, desc: "BLE is bonded" },
    ble_conn_link_lost: { id: 0x0A07, desc: "BLE connection lost" },
    ble_beacon_start: { id: 0x0A08, desc: "BLE beacon started" },
    ble_beacon_stop: { id: 0x0A09, desc: "BLE beacon stopped" },
    
    user_1: { id: 0x0B00, desc: "User event 1" },
    user_2: { id: 0x0B01, desc: "User event 2" },
    user_3: { id: 0x0B02, desc: "User event 3" },
    user_4: { id: 0x0B03, desc: "User event 4" },
    user_5: { id: 0x0B04, desc: "User event 5" },

};

export const BUTTON_PATTERNS: Bit_offsets = {
    press: {desc: "Press", bit_offset: 0, bit_length: 4},
    long_press: {desc: "Long press", bit_offset: 4, bit_length: 4},
    single_click: {desc: "Single Click", bit_offset: 8, bit_length: 4},
    double_click: {desc: "Double click", bit_offset: 12, bit_length: 4},
    tripple_click: {desc: "Tripple click", bit_offset: 16, bit_length: 4},
    button_sequence: {desc: "Button sequence", bit_offset: 20, bit_length: 4},
    // rfu: {desc: "RFU", bit_offset: 24, bit_length: 8},
};

export const BUTTON_ACTIONS: Option_vals = {
    no_action: {desc: "No action", val: 0,},
    dispplay_battery_level_on_the_leed: {desc: "Display battery level on the LED", val: 1,},
    start_stop_sos: {desc: "Start/Stop SOS", val: 2,},
    position_on_demand: {desc: "Position on demand"	, val: 3,},
    send_a_system_status_notif: {desc: "Send a system status notification", val: 4,},
    start_device: {desc: "Start device", val: 5,},
    stop_device: {desc: "Stop device", val: 6,},
    start_sos: {desc: "Start SOS", val: 7,},
    start_ble_adv_for_conn: {desc: "Start BLE advertising for connectivity", val: 8,},
    // rfu: {desc: "RFU", val: 0},
};

export const BUTTON_TIMING_BIT_OFFSETS: Bit_offsets = {
    duration_of_press: {desc: "Duration of Press [0.5s]", bit_offset: 0, bit_length: 4, unit: "0.5s"},
    duration_diff_of_long_press: {desc: "Additional Duration of Long Press [0.5s]", bit_offset: 4, bit_length: 4, unit: "0.5s"},
    button1_debounce_time: {desc: "Button 1 Debounce Time [ms]", bit_offset: 8, bit_length: 8, unit: "ms"},
    button2_debounce_time: {desc: "Button 2 Debounce Time [ms]", bit_offset: 16, bit_length: 8, unit: "ms"},
    // rfu: {desc: "RFU", bit_offset: 24, bit_length: 8, unit: "ms"},
};

export const LED_PATTERNS: Option_vals =  {
    not_configured: { desc: "Not set",  val: 0 },
    led_off: { desc: "LED off",  val: 1 },
    led_on: { desc: "LED on",  val: 2 },
    fade_in: { desc: "Fade in",  val: 3 },
    fade_out: { desc: "Fade out",  val: 4 },
    blink_slow: { desc: "Blink slow",  val: 5 },
    blink_medium: { desc: "Blink medium",  val: 6 },
    blink_fast: { desc: "Blink fast",  val: 7 },
    flash_slow: { desc: "Flash slow",  val: 8 },
    flash_fast: { desc: "Flash fast",  val: 9 },
    heart: { desc: "Heart",  val: 10 },
};

export const BUZZER_MELODIES: Option_vals = { 
    not_configured: { desc: "Not set", val: 0 },
    melody1_off: { desc: "Melody 1 - Off",  val: 1 },
    melody2: { desc: "Melody 2",  val: 2 },
    melody3: { desc: "Melody 3",  val: 3 },
    melody4: { desc: "Melody 4",  val: 4 },
    melody5: { desc: "Melody 5",  val: 5 },
};

export const GEOLOC_PROFILE_TRIGGERS: Option_vals = { 
    pod: { desc: "Position on demand", val: 0 },
    sos: { desc: "SOS", val: 1 },
    motion_start: { desc: "Motion Start", val: 2 },
    motion_stop: { desc: "Motion Stop", val: 3 },
    in_motion: { desc: "In motion", val: 4 },
    in_static: { desc: "In static", val: 5 },
    shock: { desc: "Shock", val: 6 },
    temp_high_threshold: { desc: "High tempperature threshold", val: 7 },
    temp_low_threshold: { desc: "Low temperature threshold", val: 8 },
    geozoning: { desc: "Geozoning",  val: 9 },
};

export const GEOLOC_TECHNOLOGIES: Option_vals = { 
    none: { desc: "None", val: 0 },
    lr11xx_gnss: { desc: "LR11xx GNSS", val: 1 },
    wifi: { desc: "WIFI", val: 2 },
    ble_scan_1: { desc: "BLE scan 1", val: 3 },
    ble_scan_2: { desc: "BLE scan 2", val: 4 },
    assisted_gnss: { desc: "Assisted GNSS", val: 5 },
    gnss: { desc: "GNSS", val: 6 },
};

export const LORAWAN_TX_STRATEGY_BITS: Option_bits = {

    adr_enabled: {desc: "Adaptive Data Rate in Static state", bit: 0},
    dual_tr_static: {desc: "Double Transmission in Static state", bit: 1},
    dual_tr_motion: {desc: "Double Transmission in Motion state", bit: 2},
    auto_inc_dr_if_oversized: {desc: "Automatically icrease the DR of over-sized messages", bit: 3},
    // rfu7: {desc: "RFU7", bit: 7},
    // rfu6: {desc: "RFU6", bit: 6},
    // rfu5: {desc: "RFU5", bit: 5},
    // rfu4: {desc: "RFU4", bit: 4},
    
    _1st_tr_dr0: {desc: "DR0", bit: 8},
    _1st_tr_dr1: {desc: "DR1", bit: 9},
    _1st_tr_dr2: {desc: "DR2", bit: 10},
    _1st_tr_dr3: {desc: "DR3", bit: 11},
    _1st_tr_dr4: {desc: "DR4", bit: 12},
    _1st_tr_dr5: {desc: "DR5", bit: 13},
    _1st_tr_dr6: {desc: "DR6", bit: 14},
    _1st_tr_dr7: {desc: "DR7", bit: 15},   

    _2nd_tr_dr0: {desc: "DR0", bit: 16},
    _2nd_tr_dr1: {desc: "DR1", bit: 17},
    _2nd_tr_dr2: {desc: "DR2", bit: 18},
    _2nd_tr_dr3: {desc: "DR3", bit: 19},
    _2nd_tr_dr4: {desc: "DR4", bit: 20},
    _2nd_tr_dr5: {desc: "DR5", bit: 21},
    _2nd_tr_dr6: {desc: "DR6", bit: 22},
    _2nd_tr_dr7: {desc: "DR7", bit: 23},

}

export const CELL_NWK_ID_OPTIONS: Option_vals = {
    _0x00: {desc: '-', val: 0x00,},
    _0x01: {desc: '0x01', val: 0x01,}, 
    _0x02: {desc: '0x02', val: 0x02,}, 
    _0x03: {desc: '0x03', val: 0x03,}, 
    _0x04: {desc: '0x04', val: 0x04,}, 
    _0x05: {desc: '0x05', val: 0x05,}, 
    _0x08: {desc: '0x08', val: 0x08,}, 
    _0x0C: {desc: '0x0C', val: 0x0C,}, 
    _0x0D: {desc: '0x0D', val: 0x0D,}, 
    _0x0E: {desc: '0x0E', val: 0x0E,}, 
    _0x11: {desc: '0x11', val: 0x11,}, 
    _0x12: {desc: '0x12', val: 0x12,}, 
    _0x13: {desc: '0x13', val: 0x13,}, 
    _0x14: {desc: '0x14', val: 0x14,}, 
    _0x15: {desc: '0x15', val: 0x15,}, 
    _0x19: {desc: '0x19', val: 0x19,}, 
    _0x1A: {desc: '0x1A', val: 0x1A,}, 
    _0x1C: {desc: '0x1C', val: 0x1C,}, 
    _0x42: {desc: '0x42', val: 0x42,}, 
    _0x47: {desc: '0x47', val: 0x47,}, 
    _0x55: {desc: '0x55', val: 0x55,},
};

export const CELL_PSM_TAU_PERIOD_TIME_UNITS: Option_vals = {
    timer_is_deactivated: { desc: "Timer is deactivated",  val: 7 },
    _10_minutes: { desc: "10 minutes ",  val: 0 },
    _1_hour: { desc: "1 hour",  val: 1 },
    _10_hours: { desc: "10 hours", val: 2 },
    _2_seconds: { desc: "2 seconds",  val: 3 },
    _30_seconds: { desc: "30 seconds",  val: 4 },
    _1_minutes: { desc: "1 minutes",  val: 5 },
    _320_hours: { desc: "320 hours",  val: 6 },
};

export const CELL_PSM_ACTIVE_TIME_UNITS: Option_vals = {
    timer_is_deactivated: { desc: "Timer is deactivated",  val: 7 },
    _2_seconds: { desc: "2 seconds",  val: 0 },
    _1_minute: { desc: "1 minute",  val: 1 },
    _10_hours: { desc: "10 hours",  val: 2 },
}; 



// export function hex_to_array(hex: string, len: number): Result<number[], string> {
//     if ( hex.startsWith('0x') || hex.startsWith('0X') ) { hex = hex.slice(2) }
//     if ( (hex.length == 2*len) && REGEXP_HEXSTRING.test(hex) ) {
//         const byteArray = [];
//         for (let i=0; i<len; i++) {
//             byteArray.push(
//                 parseInt(hex.substr(i*2, 2), 16)
//             )
//         }
//         return {
//             val: byteArray,
//             err: '',
//         }
//     } else {
//         return {
//             val: undefined,
//             err: `must be a valid Hexadecimal String representation of ${len} bytes`,
//         }
//     }
// }

// export function array_to_hex(bytes: number[], len: number): Result<string, string> {
//     if (bytes.length == len) {
//         let hex = '';
//         for (const byte of bytes) {
//             if (byte !== (byte & 0xff)) {
//                 return {
//                     val: undefined,
//                     err: `must be an array of ${len} bytes`,
//                 }
//             } 
//             hex += (byte >>> 4).toString(16);
//             hex += (byte & 0xf).toString(16);
//         }
//         return {
//             val: hex,
//             err: '',
//         }
//     } else {
//         return {
//             val: undefined,
//             err: `must be an array of ${len} bytes`,
//         }
//     }
// }








export function c_string_to_bytes(paramValue: string, byte_len: number): number[] {
    if ((paramValue.slice(0,1) != '{') && (paramValue.slice(-1) != '}')) {
        throw new Error(`Must be a hex encoded byte array. Expected format is "{aa,bb,cc,...}")`);
    }
    const paramValueHexStringArray = paramValue.slice(1, -1).trim().split(',');
    const paramValueByteArray = [];
    for (let i=0; i < paramValueHexStringArray.length; i++) {
        if ( !REGEXP_HEXBYTE.test(paramValueHexStringArray[i]) ) {
            throw new Error(`Invalid hex encoded byte format. Expected format is "{aa,bb,cc,...}")`);
        }
        const v = parseInt(paramValueHexStringArray[i], 16);
        paramValueByteArray.push(v);
    }
    if (paramValueByteArray.length !== byte_len) {
    throw new Error(`The array must be ${byte_len} bytes long.`);
    }
    return paramValueByteArray;
}

export function bytes_to_hex(bytes: number[], byte_len: number): string {
    if (bytes.length !== byte_len) {
    throw new Error(`must be an array of ${byte_len} bytes`);
    }
    let hex = '';
    for (const byte of bytes) {
        if (byte !== (byte & 0xff)) {
        throw new Error(`must be an array of ${byte_len} bytes`);
        }
        hex += (byte >>> 4).toString(16);
        hex += (byte & 0xf).toString(16);
    }
    return hex;
}

export function hex_to_bytes(hex: string, byte_len: number): number[] {
    if ( hex.startsWith('0x') || hex.startsWith('0X') ) { hex = hex.slice(2) }
    if ( !( (hex.length === 2*byte_len) && REGEXP_HEXSTRING.test(hex) ) ) {
    throw new Error(`must be a valid Hexadecimal String representation of ${byte_len} bytes`);
    }
    const bytes = [];
    for (let i=0; i<byte_len; i++) {
    bytes.push(
        parseInt(hex.slice(i*2, (i+1)*2), 16)
    )
    }
    return bytes;
}

export function bytes_to_c_string(bytes: number[], byte_len: number): string {
    if (bytes.length !== byte_len) {
    throw new Error(`must be an array of ${byte_len} bytes`);
    }
    const param_val = '{' + bytes.map( byte => byte.toString(16).padStart(2,'0') ).join(',') + '}';
    return param_val;
}
  

export function validate_i32_param(n: number, min: number, max: number): number {
    if ((n<min) || (n>max)) {
        throw new Error(`the value must be between ${min} and ${max}`);
    }
    return n;
}

export function validate_string(s: string): string {
    if (s.length>128) {
        throw new Error('the value must be a max 128 char long utf-8 string')
    }
    return s;
}

export function validate_options_param(i: number, options: Option_vals): number {
    for (const key in options) {
        if ( i == options[key].val ) return i;
    }
    throw new Error(`the value must be a valid option`);
}

export function encode_notif_bitmap(gui_val: Notif_bitmap_gui_val): number[] { 

    const param_val: number[] = [0,0,0,0,0,0];

    // array[NOTIFICATIONS.sys_status.id >>> 8] |= val.sys_status ? (1 << (NOTIFICATIONS.sys_status.id & 0xff) ) : 0;

    param_val[0] |= gui_val.sys_status ? 1 << 0 : 0;
    param_val[0] |= gui_val.sys_low_battery ? 1 << 1 : 0;
    param_val[0] |= gui_val.sys_ble ? 1 << 2 : 0;
    param_val[0] |= gui_val.sys_tamper ? 1 << 3 : 0;
    param_val[0] |= gui_val.sys_heartbeat ? 1 << 4 : 0;

    param_val[1] |= gui_val.sos_on ? 1 << 0 : 0;
    param_val[1] |= gui_val.sos_off ? 1 << 1 : 0;

    param_val[2] |= gui_val.temp_high ? 1 << 0 : 0;
    param_val[2] |= gui_val.temp_low ? 1 << 1 : 0;
    param_val[2] |= gui_val.temp_normal ? 1 << 2 : 0;

    param_val[3] |= gui_val.acc_motion_start ? 1 << 0 : 0;
    param_val[3] |= gui_val.acc_motion_end ? 1 << 1 : 0;
    param_val[3] |= gui_val.acc_shock ? 1 << 2 : 0;

    param_val[4] |= gui_val.nwk_main_up ? 1 << 0 : 0;
    param_val[4] |= gui_val.nwk_backup_up ? 1 << 1 : 0;

    param_val[5] |= gui_val.geozone_entry ? 1 << 0 : 0;
    param_val[5] |= gui_val.geozone_exit ? 1 << 1 : 0;
    param_val[5] |= gui_val.geozone_in_hazard ? 1 << 2 : 0;
    param_val[5] |= gui_val.geozone_out_hazard ? 1 << 3 : 0;
    param_val[5] |= gui_val.geozone_meeting_point ? 1 << 4 : 0; 

    return param_val;

}

export function decode_notif_bitmap(param_val: number[]): Notif_bitmap_gui_val { 

    const gui_val: Notif_bitmap_gui_val = {

        // sys_status: ( array[ NOTIFICATIONS.sys_status.id >>> 8 ] >>> (NOTIFICATIONS.sys_status.id & 0xff) ) & 1 == 1,

        sys_status: (( param_val[0] >>> 0 ) & 1) == 1,
        sys_low_battery: (( param_val[0] >>> 1 ) & 1) == 1,
        sys_ble: (( param_val[0] >>> 2 ) & 1) == 1,
        sys_tamper: (( param_val[0] >>> 3 ) & 1) == 1,
        sys_heartbeat: (( param_val[0] >>> 4 ) & 1) == 1,

        sos_on: (( param_val[1] >>> 0 ) & 1) == 1,
        sos_off: (( param_val[1] >>> 1 ) & 1) == 1,

        temp_high: (( param_val[2] >>> 0 ) & 1) == 1,
        temp_low: (( param_val[2] >>> 1 ) & 1) == 1,
        temp_normal: (( param_val[2] >>> 2 ) & 1) == 1,

        acc_motion_start: (( param_val[3] >>> 0 ) & 1) == 1,
        acc_motion_end: (( param_val[3] >>> 1 ) & 1) == 1,
        acc_shock: (( param_val[3] >>> 2 ) & 1) == 1,

        nwk_main_up: (( param_val[4] >>> 0 ) & 1) == 1,
        nwk_backup_up: (( param_val[4] >>> 1 ) & 1) == 1,

        geozone_entry: (( param_val[5] >>> 0 ) & 1) == 1,
        geozone_exit: (( param_val[5] >>> 1 ) & 1) == 1,
        geozone_in_hazard: (( param_val[5] >>> 2 ) & 1) == 1,
        geozone_out_hazard: (( param_val[5] >>> 3 ) & 1) == 1,
        geozone_meeting_point: (( param_val[5] >>> 4 ) & 1) == 1,

    } 

    return gui_val;

}


export function encode_button_map(gui_val: Button_map_gui_val): number { 

    let param_val: number = 0;

    param_val |= gui_val.press << 0;
    param_val |= gui_val.long_press << 4;
    param_val |= gui_val.single_click << 8;
    param_val |= gui_val.double_click << 12;
    param_val |= gui_val.tripple_click << 16;
    param_val |= gui_val.button_sequence << 20;

    return param_val;

}

export function decode_button_map(param_val: number): Button_map_gui_val {

    if ( (param_val & 0x00ffffff) !== param_val ) {
        throw new Error('Only bit 0..23 can be used in this bitmap!')
    }

    const gui_val: Button_map_gui_val = {

        press: (param_val >>> 0) & 0x0f,
        long_press: (param_val >>> 4) & 0x0f,
        single_click: (param_val >>> 8) & 0x0f,
        double_click: (param_val >>> 12) & 0x0f,
        tripple_click: (param_val >>> 16) & 0x0f,
        button_sequence: (param_val >>> 20) & 0x0f,

    }

    return gui_val;

}


export function button_timing_val_to_str(val: Button_timing_gui_val): Button_timing_gui_str {
    return {
        duration_of_press: val.duration_of_press.toString(),
        duration_diff_of_long_press: val.duration_diff_of_long_press.toString(),
        button1_debounce_time: val.button1_debounce_time.toString(),
        button2_debounce_time: val.button2_debounce_time.toString(),
    }
} 

export function button_timing_str_to_val(str: Button_timing_gui_str): Button_timing_gui_val {

    try {
        return {
            duration_of_press: parse_txt_as_i32(str.duration_of_press).i32_num,
            duration_diff_of_long_press: parse_txt_as_i32(str.duration_diff_of_long_press).i32_num,
            button1_debounce_time: parse_txt_as_i32(str.button1_debounce_time).i32_num,
            button2_debounce_time: parse_txt_as_i32(str.button2_debounce_time).i32_num,
        }
    } catch (err) {
        throw new Error(`One of the fields has the following error: ${(err as Error).message}`)
    }

    
} 

export function encode_button_timing(gui_val: Button_timing_gui_val): number { 

    let param_val = 0;

    if ((gui_val.duration_of_press & 0x0f) === gui_val.duration_of_press) {
        param_val |= gui_val.duration_of_press << 0;
    } else {
        throw new Error('The value of the "Duration of Press" field must be in the range of 0..15!')
    }

    if ((gui_val.duration_diff_of_long_press & 0x0f) === gui_val.duration_diff_of_long_press) {
        param_val |= gui_val.duration_diff_of_long_press << 4;
    } else {
        throw new Error('The value of the "Duration diff of Long Press" field must be in the range of 0..15!')
    }

    if ((gui_val.button1_debounce_time & 0xff) === gui_val.button1_debounce_time) {
        param_val |= gui_val.button1_debounce_time << 8;
    } else {
        throw new Error('The value of the "Button #1 Debounce Time" field must be in the range of 0..255!')
    }

    if ((gui_val.button2_debounce_time & 0xff) === gui_val.button2_debounce_time) {
        param_val |= gui_val.button2_debounce_time << 16;
    } else {
        throw new Error('The value of the "Button #2 Debounce Time" field must be in the range of 0..255!')
    }

    // param_val |= (gui_val.duration_of_press & 0x0f) << 0;
    // param_val |= (gui_val.duration_diff_of_long_press & 0x0f) << 4;
    // param_val |= (gui_val.button1_debounce_time & 0xff) << 8;
    // param_val |= (gui_val.button2_debounce_time & 0xff) << 16;

    return param_val;
}

export function decode_button_timing(param_val: number): Button_timing_gui_val {

    if ( (param_val & 0x00ffffff) !== param_val ) {
        throw new Error('Only bit 0..23 can be used in this bitmap!')
    }

    const gui_val = {

        duration_of_press: (param_val >>> 0) & 0x0f,
        duration_diff_of_long_press: (param_val >>> 4) & 0x0f,
        button1_debounce_time: (param_val >>> 8) & 0xff,
        button2_debounce_time: (param_val >>> 16) & 0xff,

    }

    return gui_val;

}


export function led_map_val_to_str(val: Led_map_gui_val_item[]): Led_map_gui_str_item[] {
    const str: Led_map_gui_str_item[] = [];
    for (const item of val) {
        str.push({
            pattern: item.pattern,
            inverted: item.inverted,
            count: item.count.toString(),
            event: item.event,
        })
    }
    return str;
} 

export function led_map_str_to_val(str: Led_map_gui_str_item[]): Led_map_gui_val_item[] {
    try{
        const val: Led_map_gui_val_item[] = [];
        for (const item of str) {
            val.push({
                pattern: item.pattern,
                inverted: item.inverted,
                count: parse_txt_as_i32(item.count).i32_num,
                event: item.event,
            })
        }
        return val;
    } catch (err) {
        throw new Error(`One of the fields has the following error: ${(err as Error).message}`)
    }
} 


export function encode_led_map(gui_val: Led_map_gui_val_item[]): number[] { 

    const param_val: number[] = [];

    for (const item of gui_val) {

        if ((item.count & 0b0011_1111) !== item.count) {
            throw new Error(`The values of all count fields must be in the range 0..63`);
        }

        let byte1 = 0, byte2 = 0, byte3 = 0;

        byte1 |= item.inverted ? 0b1000_0000 : 0;
        byte1 |= (item.count & 0b0011_0000) << 1;
        byte1 |= ((item.event >>> 8) & 0b0001_1111);

        byte2 |= item.event & 0b0111_1111;

        byte3 |= (item.count & 0b0000_1111) << 4;
        byte3 |= item.pattern & 0b0000_1111;

        param_val.push(byte1, byte2, byte3);

    }

    return param_val;

}

export function decode_led_map(param_val: number[]): Led_map_gui_val_item[] { 

    const gui_val: Led_map_gui_val_item[] = [];

    for (let i=0; i<30; i+=3) {

        const byte1: number = param_val[i];
        const byte2 = param_val[i+1];
        const byte3 = param_val[i+2];

        gui_val.push({
            pattern: byte3 & 0b0000_1111,
            inverted: (byte1 & 0b1000_0000) == 0b1000_0000,
            count: (byte3 >>> 4) | ((byte1 & 0b0110_0000) >> 1),
            event: (byte2 & 0b0111_1111) | ((byte1 & 0b0001_1111) << 8)
        })   
    }

    return gui_val;

}




export function buzzer_map_val_to_str(val: Buzzer_map_gui_val_item[]): Buzzer_map_gui_str_item[] {
    const str: Buzzer_map_gui_str_item[] = [];
    for (const item of val) {
        str.push({
            melody: item.melody,
            count: item.count.toString(),
            event: item.event,
        })
    }
    return str;
} 

export function buzzer_map_str_to_val(str: Buzzer_map_gui_str_item[]): Buzzer_map_gui_val_item[] {
    try{
        const val: Buzzer_map_gui_val_item[] = [];
        for (const item of str) {
            val.push({
                melody: item.melody,
                count: parse_txt_as_i32(item.count).i32_num,
                event: item.event,
            })
        }
        return val;
    } catch (err) {
        throw new Error(`One of the fields has the following error: ${(err as Error).message}`)
    }
} 

export function encode_buzzer_map(gui_val: Buzzer_map_gui_val_item[]): number[] { 

    const param_val: number[] = [];

    for (const item of gui_val) {

        if ((item.count & 0b0011_1111) !== item.count) {
            throw new Error(`The values of all "count" fields must be in the range 0..63`);
        }

        let byte1 = 0, byte2 = 0, byte3 = 0;

        byte1 |= (item.count & 0b0011_1000) << 2;
        byte1 |= ((item.event >>> 8) & 0b0001_1111);

        byte2 |= item.event & 0b0111_1111;

        byte3 |= (item.count & 0b0000_0111) << 5;
        byte3 |= item.melody & 0b0001_1111;

        param_val.push(byte1, byte2, byte3);

    }

    return param_val;

}

export function decode_buzzer_map(param_val: number[]): Buzzer_map_gui_val_item[] { 

    const gui_val = [];

    for (let i=0; i<30; i+=3) {

        const byte1 = param_val[i];
        const byte2 = param_val[i+1];
        const byte3 = param_val[i+2];

        gui_val.push({
            melody: byte3 & 0b0001_1111,
            count: (byte3 >>> 5) | ((byte1 & 0b1110_0000) >> 2),
            event: (byte2 & 0b0111_1111) | ((byte1 & 0b0001_1111) << 8)
        })   
    }

    return gui_val;

}


export function encode_geoloc_profile_triggers(gui_val: Geoloc_profile_triggers_gui_val): number { 

    let param_val = 0;
    param_val |= gui_val.pod ? (1 << 0) : 0;
    param_val |= gui_val.sos ? (1 << 1) : 0;
    param_val |= gui_val.motion_start ? (1 << 2) : 0;
    param_val |= gui_val.motion_stop ? (1 << 3) : 0;
    param_val |= gui_val.in_motion ? (1 << 4) : 0;
    param_val |= gui_val.in_static ? (1 << 5) : 0;
    param_val |= gui_val.shock ? (1 << 6) : 0;
    param_val |= gui_val.temp_high_threshold ? (1 << 7) : 0;
    param_val |= gui_val.temp_low_threshold ? (1 << 8) : 0;
    param_val |= gui_val.geozoning ? (1 << 9) : 0;

    return param_val;

}

export function decode_geoloc_profile_triggers(param_val: number): Geoloc_profile_triggers_gui_val { 

    if (param_val < 0 || param_val > 1023) {
        throw new Error('Invalid bitmap. Only bit 0..8 can be set to one!');
    }

    const gui_val = {
        pod: ((param_val >>> 0) & 1) == 1,
        sos: ((param_val >>> 1) & 1) == 1,
        motion_start: ((param_val >>> 2) & 1) == 1,
        motion_stop: ((param_val >>> 3) & 1) == 1,
        in_motion: ((param_val >>> 4) & 1) == 1,
        in_static: ((param_val >>> 5) & 1) == 1,
        shock: ((param_val >>> 6) & 1) == 1,
        temp_high_threshold: ((param_val >>> 7) & 1) == 1,
        temp_low_threshold: ((param_val >>> 8) & 1) == 1,
        geozoning: ((param_val >>> 0) & 9) == 1,
    };

    return gui_val;

}




export function encode_geoloc_technologies(gui_val: Geoloc_technologies_gui_val_item[]): number[] { 

    const param_val: number[] = [];

    for (const item of gui_val) {  
        param_val.push(
            (item.techno & 0b0111_1111) | (item.always_triggered ? 128 : 0)
        );
    }

    return param_val;

}

export function decode_geoloc_technologies(param_val: number[]): Geoloc_technologies_gui_val_item[] { 

    const gui_val = [];

    for (const item of param_val) {

        gui_val.push({
            techno: item & 0b0111_111,
            always_triggered: (item & 0b1000_0000) === 0b1000_0000,
        });

    }

    return gui_val;

}






export function cell_psm_time_val_to_str(val: Cell_psm_time_gui_val): Cell_psm_time_gui_str {
    return {
        number_of_time_units: val.number_of_time_units.toString(),
        time_unit: val.time_unit,
    }
} 

export function cell_psm_time_str_to_val(str: Cell_psm_time_gui_str): Cell_psm_time_gui_val {

    try{
        return {
            number_of_time_units: parse_txt_as_i32(str.number_of_time_units).i32_num,
            time_unit: str.time_unit,
        }
    } catch (err) {
        throw new Error(`One of the fields has the following error: ${(err as Error).message}`)
    }

    
} 

export function encode_cell_psm_time(gui_val: Cell_psm_time_gui_val): number {
    let param_val = 0;

    if ((gui_val.number_of_time_units & 0b0001_1111) !== gui_val.number_of_time_units) {
        throw new Error('the "num of time units" value must be in the range 0..31');
    }

    param_val |= gui_val.number_of_time_units & 0b0001_1111;
    param_val |= (gui_val.time_unit & 0b0000_0111) << 5;
    return param_val;
}

export function decode_cell_psm_time(param_val: number, time_units: Option_vals): Cell_psm_time_gui_val {

    if (param_val !== (param_val & 0xff) ) {
        throw new Error('the parameter value must be in the range 0..255');
    }

    const number_of_time_units = param_val & 0b0001_1111;
    const time_unit = (param_val & 0xff) >>> 5;

    let is_valid_time_unit = false
    for (const key in time_units) {
        if (time_units[key].val == time_unit) { is_valid_time_unit = true}
    }
    if (!is_valid_time_unit) {
        throw new Error(`invalid value of time unit: ${time_unit}`);
    }

    const gui_val: Cell_psm_time_gui_val = {
        number_of_time_units,
        time_unit
    }

    return gui_val;

}







export function encode_tx_strategy(gui_val: Lorawan_s1_tx_strategy_gui_val): number { 

    let param_val = 0;

    param_val |= gui_val.adr_enabled ? 1 << 0 : 0;
    param_val |= gui_val.dual_tr_static ? 1 << 1 : 0;
    param_val |= gui_val.dual_tr_motion ? 1 << 2 : 0;
    param_val |= gui_val.auto_inc_dr_if_oversized ? 1 << 3 : 0;
    // param_val |= gui_val.rfu4 ? 1 << 4 : 0;
    // param_val |= gui_val.rfu5 ? 1 << 5 : 0;
    // param_val |= gui_val.rfu6 ? 1 << 6 : 0;
    // param_val |= gui_val.rfu7 ? 1 << 7 : 0;

    param_val |= gui_val._1st_tr_dr0 ? 1 << 8 : 0;
    param_val |= gui_val._1st_tr_dr1 ? 1 << 9 : 0;
    param_val |= gui_val._1st_tr_dr2 ? 1 << 10 : 0;
    param_val |= gui_val._1st_tr_dr3 ? 1 << 11 : 0;
    param_val |= gui_val._1st_tr_dr4 ? 1 << 12 : 0;
    param_val |= gui_val._1st_tr_dr5 ? 1 << 13 : 0;
    param_val |= gui_val._1st_tr_dr6 ? 1 << 14 : 0;
    param_val |= gui_val._1st_tr_dr7 ? 1 << 15 : 0;
    
    param_val |= gui_val._2nd_tr_dr0 ? 1 << 16 : 0;
    param_val |= gui_val._2nd_tr_dr1 ? 1 << 17 : 0;
    param_val |= gui_val._2nd_tr_dr2 ? 1 << 18 : 0;
    param_val |= gui_val._2nd_tr_dr3 ? 1 << 19 : 0;
    param_val |= gui_val._2nd_tr_dr4 ? 1 << 20 : 0;
    param_val |= gui_val._2nd_tr_dr5 ? 1 << 21 : 0;
    param_val |= gui_val._2nd_tr_dr6 ? 1 << 22 : 0;
    param_val |= gui_val._2nd_tr_dr7 ? 1 << 23 : 0;

    return param_val;

}

export function decode_tx_strategy(param_val: number): Lorawan_s1_tx_strategy_gui_val { 

    const gui_val: Lorawan_s1_tx_strategy_gui_val = {

        adr_enabled: (( param_val >>> 0 ) & 1) == 1,
        dual_tr_static: (( param_val >>> 1 ) & 1) == 1,
        dual_tr_motion: (( param_val >>> 2 ) & 1) == 1,
        auto_inc_dr_if_oversized: (( param_val >>> 3 ) & 1) == 1,
        // rfu4: (( param_val >>> 0 ) & 4) == 1,
        // rfu5: (( param_val >>> 0 ) & 5) == 1,
        // rfu6: (( param_val >>> 0 ) & 6) == 1,
        // rfu7: (( param_val >>> 0 ) & 7) == 1,

        _1st_tr_dr0: (( param_val >>> 8 ) & 1) == 1,
        _1st_tr_dr1: (( param_val >>> 9 ) & 1) == 1,
        _1st_tr_dr2: (( param_val >>> 10 ) & 1) == 1,
        _1st_tr_dr3: (( param_val >>> 11 ) & 1) == 1,
        _1st_tr_dr4: (( param_val >>> 12 ) & 1) == 1,
        _1st_tr_dr5: (( param_val >>> 13 ) & 1) == 1,
        _1st_tr_dr6: (( param_val >>> 14 ) & 1) == 1,
        _1st_tr_dr7: (( param_val >>> 15 ) & 1) == 1,
        
        _2nd_tr_dr0: (( param_val >>> 16 ) & 1) == 1,
        _2nd_tr_dr1: (( param_val >>> 17 ) & 1) == 1,
        _2nd_tr_dr2: (( param_val >>> 18 ) & 1) == 1,
        _2nd_tr_dr3: (( param_val >>> 19 ) & 1) == 1,
        _2nd_tr_dr4: (( param_val >>> 20 ) & 1) == 1,
        _2nd_tr_dr5: (( param_val >>> 21 ) & 1) == 1,
        _2nd_tr_dr6: (( param_val >>> 22 ) & 1) == 1,
        _2nd_tr_dr7: (( param_val >>> 23 ) & 1) == 1,

    } 

    return gui_val;

}

export function validate_search_bands(val: number[], len: number): number[] {
    if (val.length !== len) {
            throw new Error(`the length of search bands must be ${len}`);
    }
    for (const network_id of val) {

        let valid = false;
        for (const key in CELL_NWK_ID_OPTIONS) {
            if (CELL_NWK_ID_OPTIONS[key].val === network_id) {
                valid = true;
                break;
            }
        }
        if ( !valid ) {
            throw new Error(`invalid network band ID:0x${network_id.toString(16).padStart(2,'0')} in the search list`);
        }
    
    }
        
        // if ( !CELL_NWK_ID_OPTIONS.includes(network_id) ) {
        //     throw new Error(`invalid network band ID:0x${network_id.toString(16)} in the search list`);
        // }

    return val;
}








// -------------------------------------------------------
// --- SYS
// -------------------------------------------------------

export const SYS_HIGHEST_TEMPERATURE: Optionally_saved_param_i32 = {
    id: 0x0000,
    name: 'sys_highest_temperature',
    title: 'Highest temperature',
    desc: 'Highest temperature reached',
    type: "i32",
    min_val: -100,
    max_val: 100,
    // default_val: 21,
    default_val: {
        save_it_to_config_file: false,
        val: 21,
    },
    unit: "°C",
}

export const SYS_LOWEST_TEMPERATURE: Optionally_saved_param_i32 = { 
    id: 0x0001,
    name: 'sys_lowest_temperature',
    title: 'Lowest temperature',
    desc: 'Lowest temperature reached',
    type: "i32", 
    min_val: -100, 
    max_val: 100, 
    // default_val: 21,
    default_val: {
        save_it_to_config_file: false,
        val: 21,
    },
    unit: "°C",

}

export const SYS_POWER_CONSUMPTION: Optionally_saved_param_i32 = { 
    id: 0x0002,
    name: 'sys_power_consumption',
    title: 'Total power consumed',
    desc: 'Total power consumed',
    type: "i32", 
    min_val: 0, 
    max_val: 20000, 
    // default_val: 0,
    default_val: {
        save_it_to_config_file: false,
        val: 0,
    },
    unit: "mAH",
}

export const SYS_CLI_PASSWORD: Optionally_saved_param_i32 = { 
    id: 0x0003, 
    name: 'sys_cli_password',
    title: 'CLI password',
    desc: 'CLI password',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647,
    default_val: {
        save_it_to_config_file: false,
        val: 123,
    },
    unit: "",
}

// -------------------------------------------------------
// --- CORE
// -------------------------------------------------------

export const CORE_MONITORING_PERIOD: Param_i32 = { 
    id: 0x0100, 
    name: 'core_monitoring_period',
    title: 'Device monitoring period',
    desc: 'Device monitoring period.',
    type: "i32", 
    min_val: 15, 
    max_val: 2147483647, 
    default_val: 300, 
    unit: "s",
}

export const CORE_STATUS_PERIOD: Param_i32 = { 
    id: 0x0101, 
    name: 'core_status_period',
    title: 'Status reporting period',
    desc: 'Status reporting period.',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 3600, 
    unit: "s",
}

export const CORE_NOTIF_ENABLE: Param_core_notif_XXX = { 
    id: 0x0102, 
    name: 'core_notif_enable',
    title: 'Enabled notifications',
    desc: 'Notification enable bit map',
    type: "bytearray",
    len: 6,

    default_val: {

        sys_status: true,
        sys_low_battery: true,
        sys_ble: false,
        sys_tamper: true,
        sys_heartbeat: true,

        sos_on: false,
        sos_off: false,

        temp_high: true,
        temp_low: true,
        temp_normal: true,

        acc_motion_start: true,
        acc_motion_end: true,
        acc_shock: false,

        nwk_main_up: false,
        nwk_backup_up: false,

        geozone_entry: false,
        geozone_exit: false,
        geozone_in_hazard: false,
        geozone_out_hazard: false,
        geozone_meeting_point: false,

    }
}

export const CORE_TEMP_HIGH_THRESHOLD: Param_i32 = { 
    id: 0x0103, 
    name: 'core_temp_high_threshold',
    title: 'High temperature threshold',
    desc: 'Highest temperature detection threshold',
    type: "i32", 
    min_val: -100, 
    max_val: 100, 
    default_val: 60, 
    unit: "°C",
}

export const CORE_TEMP_LOW_THRESHOLD: Param_i32 = { 
    id: 0x0104, 
    name: 'core_temp_low_threshold',
    title: 'Low temperature threshold',
    desc: 'Lowest temperature detection threshold',
    type: "i32", 
    min_val: -100, 
    max_val: 100, 
    default_val: 0, 
    unit: "°C",
}

export const CORE_TEMP_HYSTERESIS: Param_i32 = { 
    id: 0x0105, 
    name: 'core_temp_hysteresis',
    title: 'Temperature hysteresis',
    desc: 'Temperature hysteresis.',
    type: "i32", 
    min_val: -100, 
    max_val: 100, 
    default_val: 5, 
    unit: "°C",
}

export const CORE_BUTTON1_MAP: Param_core_buttonX_map = { 
    id: 0x0106, 
    name: 'core_button1_map',
    title: 'Button 1 mapping',
    desc: 'Button 1 mapping',
    type: "bitmap_options", 
    // default_encoded_val: 896,

    default_val: {
        press: BUTTON_ACTIONS.no_action.val,
        long_press: BUTTON_ACTIONS.start_ble_adv_for_conn.val,
        single_click: BUTTON_ACTIONS.position_on_demand.val,
        double_click: BUTTON_ACTIONS.no_action.val,
        tripple_click: BUTTON_ACTIONS.no_action.val,
        button_sequence: BUTTON_ACTIONS.no_action.val,
    },

}

export const CORE_BUTTON2_MAP: Param_core_buttonX_map = { 
    id: 0x0107, 
    name: 'core_button2_map',
    title: 'Button 2 mapping',
    desc: 'Button 2 mapping',
    type: "bitmap_options", 
    // default_encoded_val: 0,

    default_val: {
        press: BUTTON_ACTIONS.no_action.val,
        long_press: BUTTON_ACTIONS.no_action.val,
        single_click: BUTTON_ACTIONS.no_action.val,
        double_click: BUTTON_ACTIONS.no_action.val,
        tripple_click: BUTTON_ACTIONS.no_action.val,
        button_sequence: BUTTON_ACTIONS.no_action.val,
    },

}

export const CORE_BUTTONS_TIMING: Param_core_buttons_timing = { 
    id: 0x0108, 
    name: 'core_buttons_timing',
    title: 'Button timers',
    desc: 'Button timers',
    type: "bitmap_options", 
    // default_encoded_val: 1973843,

    default_val: {
        duration_of_press: 2, // 1s
        duration_diff_of_long_press: 10, // 5s
        button1_debounce_time: 50,
        button2_debounce_time: 50,
    },

}

export const CORE_LED0_MAP: Param_core_ledX_map = { 
    id: 0x0109, 
    name: 'core_led0_map',
    title: 'LED 0 mapping',
    desc: 'LED 0 mapping',
    type:"bytearray_options",
    len: 30,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    
    default_val: [
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn1_press.id
        },
    ],

}

export const CORE_LED1_MAP: Param_core_ledX_map = { 
    id: 0x010A, 
    name: 'core_led1_map',
    title: 'LED 1 mapping',
    desc: 'LED 1 mapping',
    type:"bytearray_options",
    len: 30,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: [
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
        {
            pattern: LED_PATTERNS.not_configured.val,
            inverted: false,
            count: 0,
            event: EVENTS.btn2_press.id
        },
    ],

}

export const CORE_BUZZER_MAP: Param_core_buzzer_map = { 
    id: 0x010B, 
    name: 'core_buzzer_map',
    title: 'Buzzer mapping',
    desc: 'Buzzer mapping',
    type:"bytearray_options",
    len: 30,
    // default_encoded_val: [0x09,0x03,0x24,0x09,0x01,0x25,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: [
        {
            melody: BUZZER_MELODIES.melody4.val,
            count: 1,
            event: EVENTS.core_running.id
        },
        {
            melody: BUZZER_MELODIES.melody5.val,
            count: 1,
            event: EVENTS.core_off.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
        {
            melody: BUZZER_MELODIES.not_configured.val,
            count: 0,
            event: EVENTS.btn1_press.id
        },
    ],

}

export const CORE_ALMANAC_VALIDITY: Param_i32 = { 
    id: 0x010C, 
    name: 'core_almanac_validity',
    title: 'Almanac validity',
    desc: 'Number of days for which the GNSS almanac is considered as valid.',
    type: "i32", 
    min_val: 7, 
    max_val: 365, 
    default_val: 120, 
    unit: "days",
}

export const CORE_ALMANAC_OUTDATED_RATIO: Param_i32 = { 
    id: 0x010D, 
    name: 'core_almanac_outdated_ratio',
    title: 'Outdated almanac ratio treshold',
    desc: 'Percentage of outdated GNSS almanac entries which will trigger network update requests. A value of 100% disables the network requests. Applicable for both LR11xx and MT33xx GNSS devices',
    type: "i32", 
    min_val: 0, 
    max_val: 100, 
    default_val: 100, 
    unit: "%",
}


// -------------------------------------------------------
// --- GEOLOC
// -------------------------------------------------------

export const GEOLOC_MOTION_PERIOD: Param_i32 = { 
    id: 0x0200, 
    name: 'geoloc_motion_period',
    title: 'Position acquisition period while in motion',
    desc: 'Position acquisition period while in motion',
    type: "i32", 
    min_val: 10, 
    max_val: 86400, 
    default_val: 300, 
    unit: "s",
}

export const GEOLOC_STATIC_PERIOD: Param_i32 = { 
    id: 0x0201, 
    name: 'geoloc_static_period',
    title: 'Position acquisition period while static',
    desc: 'Position acquisition period while static',
    type: "i32", 
    min_val: 10, 
    max_val: 86400, 
    default_val: 3600, 
    unit: "s",
}

export const GEOLOC_SOS_PERIOD: Param_i32 = { 
    id: 0x0202, 
    name: 'geoloc_sos_period',
    title: 'Position acquisition period while in sos',
    desc: 'Position acquisition period while in sos',
    type: "i32", 
    min_val: 10, 
    max_val: 86400, 
    default_val: 60, 
    unit: "s",
}

export const GEOLOC_MOTION_NB_START: Param_i32 = { 
    id: 0x0203, 
    name: 'geoloc_motion_nb_start',
    title: 'Number of acquisitions on motion start event',
    desc: 'Number of acquisitions on motion start event',
    type: "i32", 
    min_val: 0, 
    max_val: 10, 
    default_val: 1, 
    unit: "-",
}

export const GEOLOC_MOTION_NB_STOP: Param_i32 = { 
    id: 0x0204, 
    name: 'geoloc_motion_nb_stop',
    title: 'Number of acquisitions on motion stop event',
    desc: 'Number of acquisitions on motion stop event',
    type: "i32", 
    min_val: 0, 
    max_val: 10, 
    default_val: 1, 
    unit: "-",
}

export const GEOLOC_START_STOP_PERIOD: Param_i32 = { 
    id: 0x0205, 
    name: 'geoloc_start_stop_period',
    title: 'Motion Start/Stop repetition period',
    desc: 'Interval between position acquisitions while acquiring consecutive positions on motion start or stop',
    type: "i32", 
    min_val: 10, 
    max_val: 86400, 
    default_val: 120, 
    unit: "s",
}

export const GEOLOC_GNSS_HOLD_ON_MODE: Param_options = { 
    id: 0x0206, 
    name: 'geoloc_gnss_hold_on_mode',
    title: 'When is the GNSS-Hold-On timout active?',
    desc: 'Describes when the GNSS-Hold-On timout applicable is',
    type: "options", 
    options: {
        never: { desc: "Never",  val: 0 },
        always: { desc: "Always",  val: 1 },
        when_gnss_is_used: { desc: "When GNSS is used",  val: 2 },
        while_moving: { desc: "When moving",  val: 3 },
        while_static: { desc: "When static",  val: 4 },
        while_moving_and_gnss_is_used: { desc: "When moving and GNSS is used",  val: 5 },
    }, 
    default_val: 0,
}

export const GEOLOC_GNSS_HOLD_ON_TIMEOUT: Param_i32 = { 
    id: 0x0207, 
    name: 'geoloc_gnss_hold_on_timeout',
    title: 'GNSS-hold-on timeout',
    desc: 'GNSS hold on mode timeout, applicable to all hold-on modes except Disabled. 0 disables the Hold-on mode.',
    type: "i32", 
    min_val: 0, 
    max_val: 86400, 
    default_val: 0, 
    unit: "s",
}

export const GEOLOC_PROFILE0_TRIGGERS: Param_geoloc_profileX_triggers = { 
    id: 0x0208, 
    name: 'geoloc_profile0_triggers',
    title: 'Trigggers',
    desc: 'Events triggering Geoloc profile #0',
    type:"bitmap_options", 
    // default_encoded_val: 0x3D,

    default_val: {
        pod: true,
        sos: false,
        motion_start: true,
        motion_stop: true,
        in_motion: true,
        in_static: true,
        shock: false,
        temp_high_threshold: false,
        temp_low_threshold: false,
        geozoning: false,
    },

}

export const GEOLOC_PROFILE1_TRIGGERS: Param_geoloc_profileX_triggers = { 
    id: 0x0209, 
    name: 'geoloc_profile1_triggers',
    title: 'Triggers',
    desc: 'Events triggering Geoloc profile #1',
    type:"bitmap_options", 
    // default_encoded_val: 0,

    default_val: {
        pod: false,
        sos: false,
        motion_start: false,
        motion_stop: false,
        in_motion: false,
        in_static: false,
        shock: false,
        temp_high_threshold: false,
        temp_low_threshold: false,
        geozoning: false,
    },

}

export const GEOLOC_PROFILE2_TRIGGERS: Param_geoloc_profileX_triggers = { 
    id: 0x020A, 
    name: 'geoloc_profile2_triggers',
    title: 'Triggers',
    desc: 'Events triggering Geoloc profile #2',
    type:"bitmap_options", 
    // default_encoded_val: 0,

    default_val: {
        pod: false,
        sos: false,
        motion_start: false,
        motion_stop: false,
        in_motion: false,
        in_static: false,
        shock: false,
        temp_high_threshold: false,
        temp_low_threshold: false,
        geozoning: false,
    },

}

export const GEOLOC_GBE_PROFILE0_TECHNO: Param_geoloc_gbe_profileX_techno = { 
    id: 0x020B, 
    name: 'geoloc_gbe_profile0_techno',
    title: 'Technologies',
    desc: 'Geoloc profile #0 technologies',
    type:"bytearray_options", 
    len: 6,
    // default_encoded_val: [0x06,0x00,0x00,0x00,0x00,0x00],

    default_val: [
        {
            techno: GEOLOC_TECHNOLOGIES.gnss.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
    ],

}

export const GEOLOC_GBE_PROFILE1_TECHNO: Param_geoloc_gbe_profileX_techno = { 
    id: 0x020C, 
    name: 'geoloc_gbe_profile1_techno',
    title: 'Technologies',
    desc: 'Geoloc profile #1 technologies',
    type:"bytearray_options",
    len: 6,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00],

    default_val: [
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
    ],

}

export const GEOLOC_GBE_PROFILE2_TECHNO: Param_geoloc_gbe_profileX_techno = { 
    id: 0x020D, 
    name: 'geoloc_gbe_profile2_techno',
    title: 'Technologies',
    desc: 'Geoloc profile #2 technologies',
    type:"bytearray_options",
    len: 6,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00],

    default_val: [
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
        {
            techno: GEOLOC_TECHNOLOGIES.none.val,
            always_triggered: false,
        },
    ],

}

// -------------------------------------------------------
// --- GNSS
// -------------------------------------------------------

export const GNSS_CONSTELLATION: Param_options = { 
    id: 0x0300, 
    name: 'gnss_constellation',
    title: 'Selected GNSS Constellations',
    desc: 'Selected GNSS Constellations',
    type: "options", 
    options: {
        gps: { desc: "GPS",  val: 0 },
        glonass: { desc: "GLONASS",  val: 1 },
        gps_glonass: { desc: "GPS, GLONASS",  val: 2 },
        gps_galileo: { desc: "GPS, GALILEO",  val: 3 },
        gps_glonass_galileo: { desc: "GPS, GLONASS, GALILEO",  val: 4 },
        beidou: { desc: "BEIDOU",  val: 5 },
        beidou_gps: { desc: "BEIDOU, GPS",  val: 6 },
    }, 
    default_val: 2,
}

export const GNSS_MAX_TIME: Param_i32 = { 
    id: 0x0301, 
    name: 'gnss_max_time',
    title: 'GNSS acquisition timeout',
    desc: 'GNSS acquisition timeout',
    type: "i32", 
    min_val: 30, 
    max_val: 300, 
    default_val: 300, 
    unit: "s",
}

export const GNSS_T0_TIMEOUT_STATIC: Param_i32 = { 
    id: 0x0302, 
    name: 'gnss_t0_timeout_static',
    title: 'GNSS T0 timeout - Static',
    desc: 'Max time to acquire at least one satellite when the tracker is static.',
    type: "i32", 
    min_val: 0, 
    max_val: 300, 
    default_val: 30, 
    unit: "s",
}

export const GNSS_EHPE_STATIC: Param_i32 = { 
    id: 0x0303, 
    name: 'gnss_ehpe_static',
    title: 'EHPE - Static',
    desc: 'Expected "Estimated Horizontal Position Error" when the tracker is static.',
    type: "i32", 
    min_val: 0, 
    max_val: 100, 
    default_val: 20, 
    unit: "m",
}

export const GNSS_CONVERGENCE_STATIC: Param_i32 = { 
    id: 0x0304, 
    name: 'gnss_convergence_static',
    title: 'Convergence Time - Static',
    desc: 'Extra-time after a first fix to refine the fix. Used when the tracker is static.',
    type: "i32", 
    min_val: 0, 
    max_val: 300, 
    default_val: 20, 
    unit: "s",
}

export const GNSS_T0_TIMEOUT_MOTION: Param_i32 = { 
    id: 0x0305, 
    name: 'gnss_t0_timeout_motion',
    title: 'GNSS T0 timeout - Motion',
    desc: 'Max time to acquire at least one satellite when the tracker is in motion',
    type: "i32", 
    min_val: 0, 
    max_val: 300, 
    default_val: 30, 
    unit: "s",
}

export const GNSS_EHPE_MOTION: Param_i32 = { 
    id: 0x0306, 
    name: 'gnss_ehpe_motion',
    title: 'EHPE - Motion',
    desc: 'Expected "Estimated Horizontal Position Error" when the tracker is in motion.',
    type: "i32", 
    min_val: 0, 
    max_val: 100, 
    default_val: 30, 
    unit: "m",
}

export const GNSS_CONVERGENCE_MOTION: Param_i32 = { 
    id: 0x0307, 
    name: 'gnss_convergence_motion',
    title: 'Convergence Time - Motion',
    desc: 'Extra-time after a first fix to refine the fix. Used when the tracker is in motion.',
    type: "i32", 
    min_val: 0, 
    max_val: 300, 
    default_val: 20, 
    unit: "s",
}

export const GNSS_STANDBY_TIME: Param_i32 = { 
    id: 0x0308, 
    name: 'gnss_standby_time',
    title: 'GNSS standby timeout',
    desc: 'Max time to let the device in standby mode.',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 604800, 
    unit: "s",
}

export const GNSS_AGNSS_MAX_TIME: Param_i32 = { 
    id: 0x0309, 
    name: 'gnss_agnss_max_time',
    title: 'A-GNSS acquisition timeout',
    desc: 'Aided GNSS max acquisition time.',
    type: "i32", 
    min_val: 15, 
    max_val: 240, 
    default_val: 45, 
    unit: "s",
}

export const GNSS_T1_TIMEOUT: Param_i32 = { 
    id: 0x030A, 
    name: 'gnss_t1_timeout',
    title: 'A-GNSS T1 timeout',
    desc: 'Extra time in Aided GNSS mode to let the device make a fix.',
    type: "i32", 
    min_val: 0, 
    max_val: 300, 
    default_val: 0, 
    unit: "s",
}

// -------------------------------------------------------
// --- LR
// -------------------------------------------------------

export const LR_CONSTELLATION: Param_options = { 
    id: 0x0400, 
    name: 'lr_constellation',
    title: 'Selected GNSS Constellations',
    desc: 'Selected GNSS Constellations',
    type: "options", 
    options: {
        gps_only: { desc: "GPS only",  val: 0 },
        beidou_only: { desc: "BEIDOU only",  val: 5 },
        beidou_and_gps: { desc: "BEIDOU and GPS",  val: 6 },
    }, 
    default_val: 6,
}

export const LR_SCAN_MODE: Param_options = { 
    id: 0x0401, 
    name: 'lr_scan_mode',
    title: 'Scan mode',
    desc: 'LR1100 GNSS mode (NAV1 / NAV2)',
    type: "options", 
    options: {
        nav1_scan: { desc: "NAV1 scan",  val: 1 },
        nav2_scan: { desc: "NAV2 scan",  val: 2 },
    }, 
    default_val: 1,
}

export const LR_NB_SCAN: Param_i32 = { 
    id: 0x0402, 
    name: 'lr_nb_scan',
    title: 'Num of scans per position',
    desc: 'Number of scans for one position acquisition',
    type: "i32", 
    min_val: 1, 
    max_val: 4, 
    default_val: 2, 
    unit: "",
}

export const LR_INTER_SCAN_TIME: Param_i32 = { 
    id: 0x0403, 
    name: 'lr_inter_scan_time',
    title: 'Time between scans',
    desc: 'Time to wait between the scans for a position',
    type: "i32", 
    min_val: 0, 
    max_val: 15, 
    default_val: 5, 
    unit: "s",
}

export const LR_WIFI_REPORT_NB_BSSID: Param_i32 = { 
    id: 0x0404, 
    name: 'lr_wifi_report_nb_bssid',
    title: 'Time between scan reports',
    desc: 'Time to wait between the scans for a position',
    type: "i32", 
    min_val: 1, 
    max_val: 32, 
    default_val: 4, 
    unit: "",
}

export const LR_WIFI_MIN_NB_BSSID: Param_i32 = { 
    id: 0x0405, 
    name: 'lr_wifi_min_nb_bssid',
    title: 'Max num of BSSID per scan',
    desc: 'Max number of WIFI BSSID per scan',
    type: "i32", 
    min_val: 0, 
    max_val: 32, 
    default_val: 3, 
    unit: "",
}

export const LR_WIFI_MIN_RSSI: Param_i32 = { 
    id: 0x0406, 
    name: 'lr_wifi_min_rssi',
    title: 'Min RSSI treshold',
    desc: 'Minimum RSSI to consider the BSSID. A null value disable the filter.',
    type: "i32", 
    min_val: -200, 
    max_val: 0, 
    default_val: 0, 
    unit: "",
}

export const LR_WIFI_BSSID_MAC_TYPE: Param_options = { 
    id: 0x0407, 
    name: 'lr_wifi_bssid_mac_type',
    title: 'BSSID type',
    desc: 'MAC administration type of the WiFi BSSID to report.',
    type: "options", 
    options: {
        not_configured: { desc: "All types", val: 0 },
        melody1_off: { desc: "Universally administered",  val: 1 },
        melody2: { desc: "Locally administered",  val: 2 },
    },
    default_val: 1,
}

// -------------------------------------------------------
// --- BLE_SCAN1
// -------------------------------------------------------

export const BLE_SCAN1_DURATION: Param_i32 = { 
    id: 0x0500, 
    name: 'ble_scan1_duration',
    title: 'Scan duration',
    desc: 'Total time for a BLE scan',
    type: "i32", 
    min_val: 50, 
    max_val: 61440, 
    default_val: 3000, 
    unit: "ms",
}

export const BLE_SCAN1_WINDOW: Param_i32 = { 
    id: 0x0501, 
    name: 'ble_scan1_window',
    title: 'Scan window',
    desc: 'Scan window',
    type: "i32", 
    min_val: 3, 
    max_val: 10240, 
    default_val: 120, 
    unit: "ms",
}

export const BLE_SCAN1_INTERVAL: Param_i32 = { 
    id: 0x0502, 
    name: 'ble_scan1_interval',
    title: 'Scan interval',
    desc: 'Scan interval',
    type: "i32", 
    min_val: 1, 
    max_val: 10240, 
    default_val: 130, 
    unit: "ms",
}

export const BLE_SCAN1_TYPE: Param_options = { 
    id: 0x0503, 
    name: 'ble_scan1_type',
    title: 'Scan type',
    desc: 'Type of beacons to scan',
    type: "options", 
    options: {
        all_beacons: { desc: "All beacons.",  val: 0 },
        eddystone_uuid_beacons_only: { desc: "Eddystone UUID beacons only",  val: 1 },
        eddystone_url_beacons_only: { desc: "Eddystone URL beacons only",  val: 2 },
        all_eddystone_beacons: { desc: "All Eddystone beacons.",  val: 3 },
        ibeacon_beacons_only: { desc: "iBeacon beacons only",  val: 4 },
        altbeacon__beacons_only: { desc: "AltBeacon  beacons only",  val: 5 },
        custom_only_based_on_filters: { desc: "Custom (only based on filters)",  val: 6 },
        exposure_advertisement: { desc: "Exposure advertisement",  val: 7 },
    }, 
    default_val: 0,
}

export const BLE_SCAN1_MIN_RSSI: Param_i32 = { 
    id: 0x0504, 
    name: 'ble_scan1_min_rssi',
    title: 'Min RSSI treshold',
    desc: 'Min RSSI to consider the beacon',
    type: "i32", 
    min_val: -120, 
    max_val: 0, 
    default_val: -80, 
    unit: "dB",
}

export const BLE_SCAN1_MIN_NB_BEACONS: Param_i32 = { 
    id: 0x0505, 
    name: 'ble_scan1_min_nb_beacons',
    title: 'Min num of beacons needed to have a successful scan',
    desc: 'Min number of beacons to consider the scan as success (solvable). Below this value the result will be not-solvable.  Must be less or equal to ble_scan_nb_beacons.',
    type: "i32", 
    min_val: 0, 
    max_val: 100, 
    default_val: 1, 
    unit: "",
}

export const BLE_SCAN1_FILTER1_MASK: Param_bytearray = { 
    id: 0x0506, 
    name: 'ble_scan1_filter1_mask',
    title: 'Mask',
    desc: 'Mask (10 bytes) to be applied to the advertisement frame.',
    type: "bytearray",
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN1_FILTER1_VALUE: Param_bytearray = { 
    id: 0x0507, 
    name: 'ble_scan1_filter1_value',
    title: 'Value',
    desc: 'Comparison value (10 bytes) belonging to filter #1',
    type: "bytearray",
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN1_FILTER1_OFFSET: Param_i32 = { 
    id: 0x0508, 
    name: 'ble_scan1_filter1_offset',
    title: 'Offset',
    desc: 'Offset in the advertisement frame from which we apply filter #1',
    type: "i32", 
    min_val: 0, 
    max_val: 21, 
    default_val: 0, 
    unit: "",
}

export const BLE_SCAN1_FILTER2_MASK: Param_bytearray = { 
    id: 0x0509, 
    name: 'ble_scan1_filter2_mask',
    title: 'Mask',
    desc: 'Mask (10 bytes) to be applied to the advertisement frame.',
    type: "bytearray", 
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN1_FILTER2_VALUE: Param_bytearray = { 
    id: 0x050A, 
    name: 'ble_scan1_filter2_value',
    title: 'Value',
    desc: 'Comparison value (10 bytes) belonging to filter #2',
    type: "bytearray",
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN1_FILTER2_OFFSET: Param_i32 = { 
    id: 0x050B, 
    name: 'ble_scan1_filter2_offset',
    title: 'Offset',
    desc: 'Offset in the advertisement frame from which we apply filter #2',
    type: "i32", 
    min_val: 0, 
    max_val: 21, 
    default_val: 0, 
    unit: "",
}

export const BLE_SCAN1_NB_BEACONS: Param_i32 = { 
    id: 0x050C, 
    name: 'ble_scan1_nb_beacons',
    title: 'Number of beacons to report',
    desc: 'Number of beacons to report',
    type: "i32", 
    min_val: 1, 
    max_val: 20, 
    default_val: 4, 
    unit: "",
}

export const BLE_SCAN1_REPORT_TYPE: Param_options = { 
    id: 0x050D, 
    name: 'ble_scan1_report_type',
    title: 'Scan report type',
    desc: 'Scan report type',
    type: "options", 
    options: {
        mac_address: { desc: "MAC address",  val: 0 },
        beacon_id_short_2_bytes: { desc: "Beacon ID - short (2 bytes)",  val: 1 },
        beacon_id_long_16_bytes: { desc: "Beacon ID - long (16 bytes)",  val: 2 },
    }, 
    default_val: 0,
}

export const BLE_SCAN1_REPORT_ID_OFS: Param_i32 = { 
    id: 0x050E, 
    name: 'ble_scan1_report_id_ofs',
    title: "Beacon ID offset",
    desc: "The offset of beacon ID's in advertisement frames",
    type: "i32", 
    min_val: 0, 
    max_val: 25, 
    default_val: 0, 
    unit: "",
}

// -------------------------------------------------------
// --- BLE_SCAN2
// -------------------------------------------------------

export const BLE_SCAN2_DURATION: Param_i32 = { 
    id: 0x0600, 
    name: 'ble_scan2_duration',
    title: 'Scan duration',
    desc: 'Total time for a BLE scan',
    type: "i32", 
    min_val: 50, 
    max_val: 61440, 
    default_val: 3000, 
    unit: "ms",
}

export const BLE_SCAN2_WINDOW: Param_i32 = { 
    id: 0x0601, 
    name: 'ble_scan2_window',
    title: 'Scan window',
    desc: 'Scan window',
    type: "i32", 
    min_val: 3, 
    max_val: 10240, 
    default_val: 120, 
    unit: "ms",
}

export const BLE_SCAN2_INTERVAL: Param_i32 = { 
    id: 0x0602, 
    name: 'ble_scan2_interval',
    title: 'Scan interval',
    desc: 'Scan interval',
    type: "i32", 
    min_val: 1, 
    max_val: 10240, 
    default_val: 130, 
    unit: "ms",
}

export const BLE_SCAN2_TYPE: Param_options = { 
    id: 0x0603, 
    name: 'ble_scan2_type',
    title: 'Scan type',
    desc: 'Type of beacons to scan',
    type: "options", 
    options: { 
        all_beacons: { desc: "All beacons.",  val: 0 },
        eddystone_uuid_beacons_only: { desc: "Eddystone UUID beacons only.",  val: 1 },
        eddystone_url_beacons_only: { desc: "Eddystone URL beacons only.",  val: 2 },
        all_eddystone_beacons: { desc: "All Eddystone beacons.",  val: 3 },
        ibeacon_beacons_only: { desc: "iBeacon beacons only",  val: 4 },
        altbeacon__beacons_only: { desc: "AltBeacon  beacons only",  val: 5 },
        custom_only_based_on_filters: { desc: "Custom (only based on filters)",  val: 6 },
        exposure_advertisement: { desc: "Exposure advertisement",  val: 7 },
    }, 
    default_val: 0,
}

export const BLE_SCAN2_MIN_RSSI: Param_i32 = { 
    id: 0x0604, 
    name: 'ble_scan2_min_rssi',
    title: 'Min RSSI treshold',
    desc: 'Min RSSI to consider the beacon',
    type: "i32", 
    min_val: -120, 
    max_val: 0, 
    default_val: -80, 
    unit: "dB",
}

export const BLE_SCAN2_MIN_NB_BEACONS: Param_i32 = { 
    id: 0x0605, 
    name: 'ble_scan2_min_nb_beacons',
    title: 'Min num of beacons needed to have a successful scan',
    desc: 'Min number of beacons to consider the scan as success (solvable). Below this value the result will be not-solvable.  Must be less or equal to ble_scan_nb_beacons.',
    type: "i32", 
    min_val: 0, 
    max_val: 100, 
    default_val: 1, 
    unit: "",
}

export const BLE_SCAN2_FILTER1_MASK: Param_bytearray = { 
    id: 0x0606, 
    name: 'ble_scan2_filter1_mask',
    title: 'Mask',
    desc: 'Mask (10 bytes) to be applied to the advertisement frame.',
    type: "bytearray",
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN2_FILTER1_VALUE: Param_bytearray = { 
    id: 0x0607, 
    name: 'ble_scan2_filter1_value',
    title: 'Value',
    desc: 'Comparison value (10 bytes) belonging to filter #1',
    type: "bytearray",
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN2_FILTER1_OFFSET: Param_i32 = { 
    id: 0x0608, 
    name: 'ble_scan2_filter1_offset',
    title: 'Offset',
    desc: 'Offset in the advertisement frame from which we apply filter #1',
    type: "i32", 
    min_val: 0, 
    max_val: 21, 
    default_val: 0, 
    unit: "",
}

export const BLE_SCAN2_FILTER2_MASK: Param_bytearray = { 
    id: 0x0609, 
    name: 'ble_scan2_filter2_mask',
    title: 'Mask',
    desc: 'Mask (10 bytes) to be applied to the advertisement frame.',
    type: "bytearray",
    len: 10, 
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN2_FILTER2_VALUE: Param_bytearray = { 
    id: 0x060A, 
    name: 'ble_scan2_filter2_value',
    title: 'Value',
    desc: 'Comparison value (10 bytes) belonging to filter #2',
    type: "bytearray", 
    len: 10,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
    default_val: "00000000000000000000",
    // encode: function(gui_val) { return hex_to_array(gui_val, this.len) },
    // decode: function(param_val) { return array_to_hex(param_val, this.len) },
}

export const BLE_SCAN2_FILTER2_OFFSET: Param_i32 = { 
    id: 0x060B, 
    name: 'ble_scan2_filter2_offset',
    title: 'Offset',
    desc: 'Offset in the advertisement frame from which we apply filter #2',
    type: "i32", 
    min_val: 0, 
    max_val: 21, 
    default_val: 0, 
    unit: "",
}

export const BLE_SCAN2_NB_BEACONS: Param_i32 = { 
    id: 0x060C, 
    name: 'ble_scan2_nb_beacons',
    title: 'Number of beacons to report',
    desc: 'Number of beacons to report',
    type: "i32", 
    min_val: 1, 
    max_val: 20, 
    default_val: 4, 
    unit: "",
}

export const BLE_SCAN2_REPORT_TYPE: Param_options = { 
    id: 0x060D, 
    name: 'ble_scan2_report_type',
    title: 'Scan report type',
    desc: 'Scan report type',
    type: "options", 
    options: {
        mac_address: { desc: "MAC address",  val: 0 },
        beacon_id_short_2_bytes: { desc: "Beacon ID - short (2 bytes)",  val: 1 },
        beacon_id_long_16_bytes: { desc: "Beacon ID - long (16 bytes)",  val: 2 },
    }, 
    default_val: 0,
}

export const BLE_SCAN2_REPORT_ID_OFS: Param_i32 = { 
    id: 0x060E, 
    name: 'ble_scan2_report_id_ofs',
    title: "Beacon ID offset",
    desc: "The offset of beacon ID's in advertisement frames",
    type: "i32", 
    min_val: 0, 
    max_val: 25, 
    default_val: 0, 
    unit: "",
}

// -------------------------------------------------------
// --- ACCELERO
// -------------------------------------------------------

export const ACCELERO_MOTION_SENSI: Param_i32 = { 
    id: 0x0700, 
    name: 'accelero_motion_sensi',
    title: 'Motion sensitivity *[31mG]',
    desc: 'Motion sensitivity',
    type: "i32", 
    min_val: 1, 
    max_val: 96, 
    default_val: 1, 
    unit: "31mG",
}

export const ACCELERO_MOTION_DURATION: Param_i32 = { 
    id: 0x0701, 
    name: 'accelero_motion_duration',
    title: 'Motion duration',
    desc: 'Motion duration',
    type: "i32", 
    min_val: 10, 
    max_val: 3600, 
    default_val: 120, 
    unit: "s",
}

export const ACCELERO_FULL_SCALE: Param_options = { 
    id: 0x0702, 
    name: 'accelero_full_scale',
    title: 'Full scale',
    desc: 'Full scale of acceleration measurements',
    type: "options", 
    options: { 
        _2g: { desc: "2g",  val: 0 },
        _4g: { desc: "4g",  val: 1 },
        _8g: { desc: "8g",  val: 2 },
        _16g: { desc: "16g",  val: 3 },
    }, 
    default_val: 3,
}

export const ACCELERO_OUTPUT_DATA_RATE: Param_options = { 
    id: 0x0703, 
    name: 'accelero_output_data_rate',
    title: 'Output Data Rate',
    desc: 'The Output Data Rate of acceleration measurements',
    type: "options", 
    options: { 
        _12_5_hz: { desc: "12.5 Hz",  val: 0 },
        _25_hz: { desc: "25 Hz",  val: 1 },
        _50_hz: { desc: "50 Hz",  val: 2 },
        _100_hz: { desc: "100 Hz",  val: 3 },
        _200_hz: { desc: "200 Hz",  val: 4 },
    }, 
    default_val: 0,
}

export const ACCELERO_SHOCK_THRESHOLD: Param_i32 = { 
    id: 0x0704, 
    name: 'accelero_shock_threshold',
    title: 'Shock detection threshold *[63mG]',
    desc: 'Shock detection threshold',
    type: "i32", 
    min_val: 0, 
    max_val: 128, 
    default_val: 0, 
    unit: "63mG",
}

// -------------------------------------------------------
// --- NET
// -------------------------------------------------------

export const NET_SELECTION: Param_options = { 
    id: 0x0800, 
    name: 'net_selection',
    title: 'Network selection order',
    desc: 'Network selection order',
    type: "options", 
    options: {
        lora: { desc: "LoRa",  val: 0 },
        cellular: { desc: "Cellular",  val: 1 },
        lora_fallback_cellular: { desc: "LoRa fallback Cellular",  val: 2 },
        cellular_fallback_lora: { desc: "Cellular fallback LoRa",  val: 3 },
    }, 
    default_val: 0,
}

export const NET_RECONNECTION_SPACING: Param_i32 = { 
    id: 0x0801, 
    name: 'net_reconnection_spacing',
    title: 'Reconnect period',
    desc: 'Interval between connection retries on the primary network, when operating on the fallback',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 600, 
    unit: "s",
}

export const NET_MAIN_PROBE_TIMEOUT: Param_i32 = { 
    id: 0x0802,
    name: 'net_main_probe_timeout',
    title: 'Reconnect timeout',
    desc: 'Maximun duration of an attempt to reconnect to the main network (Parameter available only for combo compact tracker)',
    type: "i32", 
    min_val: 120, 
    max_val: 2147483647, 
    default_val: 600, 
    unit: "s",
}

// -------------------------------------------------------
// --- LORAWAN
// -------------------------------------------------------

export const LORAWAN_CNX_TIMEOUT: Param_i32 = { 
    id: 0x0900,
    name: 'lorawan_cnx_timeout',
    title: 'Max time to wait for joining the LoRaWAN network',
    desc: 'Max time to wait for joining the LoRaWAN network before switching to the backup network.',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 0, 
    unit: "s",
}

export const LORAWAN_DL_TRIGGER_PERIOD: Param_i32 = { 
    id: 0x0901, 
    name: 'lorawan_dl_trigger_period',
    title: 'Downlink RX window trigger period',
    desc: 'Period at which an empty uplink is sent to trigger an Rx window for downlinks (if no uplink has been sent within this period)',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 600, 
    unit: "s",
}

export const LORAWAN_PROBE_MAX_ATTEMPTS: Param_i32 = { 
    id: 0x0902, 
    name: 'lorawan_probe_max_attempts',
    title: 'Max number of LoRaWAN probes',
    desc: 'Number of link-check requests sent before declaring the network as lost',
    type: "i32", 
    min_val: 0, 
    max_val: 10, 
    default_val: 4, 
    unit: "",
}

export const LORAWAN_PROBE_PERIOD: Param_i32 = { 
    id: 0x0903, 
    name: 'lorawan_probe_period',
    title: 'LoRaWAN probe period',
    desc: 'Time between LoRaWAN link-check requests',
    type: "i32", 
    min_val: 120, 
    max_val: 2147483647, 
    default_val: 43200, 
    unit: "s",
}

export const LORAWAN_CONFIRM_NOTIF_MAP: Param_core_notif_XXX = { 
    id: 0x0904, 
    name: 'lorawan_confirm_notif_map',
    title: 'Confirmed notifications',
    desc: 'Bitmap enabling LoRaWAN confirmed messages for notifications.',
    type: "bytearray_bitmap",
    len: 6,
    // default_encoded_val: [0x00,0x00,0x00,0x00,0x00,0x00],    
    default_val: {

        sys_status: false,
        sys_low_battery: false,
        sys_ble: false,
        sys_tamper: false,
        sys_heartbeat: false,

        sos_on: false,
        sos_off: false,

        temp_high: false,
        temp_low: false,
        temp_normal: false,

        acc_motion_start: false,
        acc_motion_end: false,
        acc_shock: false,

        nwk_main_up: false,
        nwk_backup_up: false,

        geozone_entry: false,
        geozone_exit: false,
        geozone_in_hazard: false,
        geozone_out_hazard: false,
        geozone_meeting_point: false,

    },
}

export const LORAWAN_CONFIRM_NOTIF_RETRY: Param_i32 = { 
    id: 0x0905, 
    name: 'lorawan_confirm_notif_retry',
    title: 'Confirmed notification retries',
    desc: 'Number of retries for confirmed messages. Value 0: ADR.',
    type: "i32", 
    min_val: 0, 
    max_val: 15, 
    default_val: 0, 
    unit: "",
}

export const LORAWAN_S1_TX_STRATEGY: Param_lorawan_s1_tx_strategy = { 
    id: 0x0906, 
    name: 'lorawan_s1_tx_strategy',
    title: 'LoRaWAN Transmit Strategy',
    desc: 'LoRaWAN Transmit Strategy',
    type: 'bitmap_options', 
    // default_encoded_val: 473102, 0x7380e
    default_val: {
        
        adr_enabled: false,
        dual_tr_static: true,
        dual_tr_motion: true,
        auto_inc_dr_if_oversized: true,
        // rfu4: false,
        // rfu5: false,
        // rfu6: false,
        // rfu7: false,

        _1st_tr_dr0: false,
        _1st_tr_dr1: false,
        _1st_tr_dr2: false,
        _1st_tr_dr3: true,
        _1st_tr_dr4: true,
        _1st_tr_dr5: true,
        _1st_tr_dr6: false,
        _1st_tr_dr7: false,

        _2nd_tr_dr0: true,
        _2nd_tr_dr1: true,
        _2nd_tr_dr2: true,
        _2nd_tr_dr3: false,
        _2nd_tr_dr4: false,
        _2nd_tr_dr5: false,
        _2nd_tr_dr6: false,
        _2nd_tr_dr7: false,

    },

}

export const LORAWAN_S1_UL_PORT: Param_i32 = { 
    id: 0x0907, 
    name: 'lorawan_s1_ul_port',
    title: 'LoRaWAN Uplink Port',
    desc: 'LoRaWAN Uplink Port',
    type: "i32", 
    min_val: 1, 
    max_val: 252, 
    default_val: 19, 
    unit: "",
}

export const LORAWAN_S1_DL_PORT: Param_i32 = { 
    id: 0x0908, 
    name: 'lorawan_s1_dl_port',
    title: 'LoRaWAN Downlink Port',
    desc: 'LoRaWAN Downlink Port',
    type: "i32", 
    min_val: 1, 
    max_val: 252, 
    default_val: 3, 
    unit: "",
}

// -------------------------------------------------------
// --- CELL
// -------------------------------------------------------

export const CELL_SIM_INTERFACE: Param_options = { 
    id: 0x0A00, 
    name: 'cell_sim_interface',
    title: 'SIM Interface',
    desc: 'SIM Interface',
    type: "options", 
    options: {
        sim0: { desc: "SIM0",  val: 0 },
        sim1_esim: { desc: "SIM1 (eSIM)",  val: 1 },
        rfu2: { desc: "RFU",  val: 2 },
        rfu3: { desc: "RFU",  val: 3 },
    }, 
    default_val: 0,
}

export const CELL_NETWORK_TYPE: Param_options = { 
    id: 0x0A01, 
    name: 'cell_network_type',
    title: 'Cellular Network Type',
    desc: 'Cellular Network Type',
    type: "options", 
    options: {
        cellular_not_used: { desc: "Cellular not used",  val: 0 },
        lte_m: { desc: "LTE-M",  val: 1 },
        nb_iot: { desc: "NB-IOT",  val: 2 },
    }, 
    default_val: 1,
}

export const CELL_SEARCH_BANDS: Param_cell_search_bands = { 
    id: 0x0A02, 
    name: 'cell_search_bands',
    title: 'Radio frequency bands scanned to search a cell',
    desc: 'Radio frequency bands scanned to search a cell',
    type: "bytearray_search_bands", 
    len: 19,
    default_val: [
        0x01,0x03,0x08,0x13,0x14,0x1c,0x00,0x00,0x00,0x00,
        0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
    ],
    
}

export const CELL_CNX_TIMEOUT_STATIC: Param_i32 = { 
    id: 0x0A03, 
    name: 'cell_cnx_timeout_static',
    title: 'Max seach time for cellular network in Static State',
    desc: 'Max seach time for cellular network in Static State',
    type: "i32", 
    min_val: 180,
    max_val: 900, 
    default_val: 180, 
    unit: "s",
}

export const CELL_CNX_TIMEOUT_MOTION: Param_i32 = { 
    id: 0x0A04, 
    name: 'cell_cnx_timeout_motion',
    title: 'Max seach time for cellular network in Motion State',
    desc: 'Max seach time for cellular network in Motion State',
    type: "i32", 
    min_val: 180, 
    max_val: 900, 
    default_val: 300, 
    unit: "s",
}

export const CELL_NW_LOST_TIMEOUT: Param_i32 = { 
    id: 0x0A05, 
    name: 'cell_nw_lost_timeout',
    title: 'Auto-reconnect time',
    desc: 'The interval between reconnection attempts on lost connection',
    type: "i32", 
    min_val: 0, 
    max_val: 900, 
    default_val: 60, 
    unit: "s",
}

export const CELL_CNX_MAX_ATTEMPTS: Param_i32 = { 
    id: 0x0A06, 
    name: 'cell_cnx_max_attempts',
    title: 'Max num of reconnect attempts',
    desc: 'Number of times the network search is repeated on lost connection before shutting down the modem',
    type: "i32", 
    min_val: 1, 
    max_val: 10, 
    default_val: 3, 
    unit: "",
}

export const CELL_ACCESS_POINT_NAME: Param_string = { 
    id: 0x0A07, 
    name: 'cell_access_point_name',
    title: 'Access Point Name',
    desc: 'Access Point Name (APN)',
    type: "string", 
    default_val: "",
}

export const CELL_OPERATOR_SIM_SLOT_0: Param_string = { 
    id: 0x0A08, 
    name: 'cell_operator_sim_slot_0',
    title: 'Cellular Operator Name - SIM0',
    desc: 'Cellular Operator Name - SIM0',
    type: "string", 
    default_val: "",
}

export const CELL_OPERATOR_SIM_SLOT_1: Param_string = { 
    id: 0x0A09, 
    name: 'cell_operator_sim_slot_1',
    title: 'Cellular Operator Name - SIM1',
    desc: 'Cellular Operator Name - SIM1',
    type: "string", 
    default_val: "",
}

export const CELL_LOW_POWER_MODE: Param_options = { 
    id: 0x0A0A, 
    name: 'cell_low_power_mode',
    title: 'Low Power Mode',
    desc: 'Low Power Mode',
    type: "options", 
    options: { 
        disabled: { desc: "Disabled",  val: 0 },
        psm: { desc: "PSM",  val: 1 },
        edrx: { desc: "eDRX",  val: 2 },
        psm_and_edrx: { desc: "PSM and eDRX",  val: 3 },
    }, 
    default_val: 1,
}

export const CELL_PSM_TAU_PERIOD: Param_cell_psm_time_XXX = { 
    id: 0x0A0B, 
    name: 'cell_psm_tau_period',
    title: 'PSM TAU period',
    desc: 'PSM TAU period (Only if Low Power mode is PSM)',
    type:"i32_options",
    time_units: CELL_PSM_TAU_PERIOD_TIME_UNITS,
    // default_encoded_val: 254,
    default_val: {
        number_of_time_units: 24,
        time_unit: CELL_PSM_TAU_PERIOD_TIME_UNITS._10_minutes.val,
    },

}

export const CELL_PSM_ACTIVE_TIME: Param_cell_psm_time_XXX = { 
    id: 0x0A0C, 
    name: 'cell_psm_active_time',
    title: 'PSM active period',
    desc: 'PSM active period (Only if Low Power mode is PSM)',
    type:"i32_options", 
    time_units: CELL_PSM_ACTIVE_TIME_UNITS,
    // default_encoded_val: 2,
    default_val: {
        number_of_time_units: 2,
        time_unit: CELL_PSM_ACTIVE_TIME_UNITS._2_seconds.val,
    },

}

export const CELL_EDRX_PCL: Param_i32 = { 
    id: 0x0A0D, 
    name: 'cell_edrx_pcl',
    title: 'eDRX paging cycle length',
    desc: 'eDRX paging cycle length (Only if Low Power mode is eDRX)',
    type: "i32", 
    min_val: 0, 
    max_val: 15, 
    default_val: 15, 
    unit: "ms",
}

export const CELL_EDRX_PTW: Param_i32 = { 
    id: 0x0A0E, 
    name: 'cell_edrx_ptw',
    title: 'eDRX paging time window',
    desc: 'eDRX paging time window (Only if Low Power mode is eDRX)',
    type: "i32", 
    min_val: 0, 
    max_val: 15, 
    default_val: 3, 
    unit: "ms",
}

export const CELL_RAI_TIMEOUT: Param_i32 = { 
    id: 0x0A0F, 
    name: 'cell_rai_timeout',
    title: 'RAI timeout',
    desc: 'RAI (Release Assistance Indication) timeout. (For UDP only)',
    type: "i32", 
    min_val: 0, 
    max_val: 10000, 
    default_val: 500, 
    unit: "ms",
}

export const CELL_MAX_PROBE_ATTEMPTS: Param_i32 = { 
    id: 0x0a10, 
    name: 'cell_max_probe_attempts',
    title: 'Max number of probe attempts',
    desc: 'Number of ping echo-request sent before declaring the network as lost. Set 0 to disable the feature.',
    type: "i32", 
    min_val: 0, 
    max_val: 10, 
    default_val: 0,
    unit: "",
}

export const CELL_PROBE_PERIOD: Param_i32 = { 
    id: 0x0a11, 
    name: 'cell_probe_period',
    title: 'Probe period',
    desc: 'Time between ping echo-request, or since the last downlink activity. It is recommended to have this value greater than the aggregation timer.',
    type: "i32", 
    min_val: 0, 
    max_val: 2147483647, 
    default_val: 600, 
    unit: "s",
}

export const CELL_S1_TRANSPORT_PROTO: Param_options = { 
    id: 0x0a12, 
    name: 'cell_s1_transport_proto',
    title: 'Transport Protocol',
    desc: 'Transport Protocol',
    type: "options", 
    options: {
        tcp: { desc: "TCP",  val: 0 },
        udp: { desc: "UDP",  val: 1 },
    }, 
    default_val: 1,
}

export const CELL_S1_IP_URL_ADDR: Param_string = { 
    id: 0x0a13, 
    name: 'cell_s1_ip_url_addr',
    title: 'Destination IP Address or URL',
    desc: 'Destination IP Address or URL',
    type: "string", 
    default_val: "",
}

export const CELL_S1_DST_IP_PORT: Param_i32 = { 
    id: 0x0a14, 
    name: 'cell_s1_dst_ip_port',
    title: 'Destination Port',
    desc: 'Destination Port',
    type: "i32", 
    min_val: 0, 
    max_val: 65535, 
    default_val: 0,
    unit: "",
}

export const CELL_S1_SRC_IP_PORT: Param_i32 = { 
    id: 0x0a15, 
    name: 'cell_s1_src_ip_port',
    title: 'Source Port',
    desc: 'Source Port',
    type: "i32", 
    min_val: 0, 
    max_val: 65535, 
    default_val: 0, 
    unit: "",
}

export const CELL_S1_TX_AGGR_TIME: Param_i32 = { 
    id: 0x0a16, 
    name: 'cell_s1_tx_aggr_time',
    title: 'Message buffering time',
    desc: 'Message buffering time',
    type: "i32", 
    min_val: 0, 
    max_val: 3600, 
    default_val: 120, 
    unit: "s",
}

// -------------------------------------------------------
// --- BLE
// -------------------------------------------------------

export const BLE_CNX_TX_POWER: Param_options = { 
    id: 0x0B00, 
    name: 'ble_cnx_tx_power',
    title: 'TX Power',
    desc: 'BLE connection TX Power',
    type: "options", 
    options: { 
        N40_00: { desc: "-40",  val: 0 },
        N20_85: { desc: "-20.85",  val: 1 },
        N19_75: { desc: "-19.75",  val: 2 },
        N18_85: { desc: "-18.85",  val: 3 },
        N17_06: { desc: "-17.6",  val: 4 },
        N16_05: { desc: "-16.5",  val: 5 },
        N15_25: { desc: "-15.25",  val: 6 },
        N14_01: { desc: "-14.1",  val: 7 },
        N13_15: { desc: "-13.15",  val: 8 },
        N12_05: { desc: "-12.05",  val: 9 },
        N10_09: { desc: "-10.9",  val: 10 },
        N09_09: { desc: "-9.9",  val: 11 },
        N08_85: { desc: "-8.85",  val: 12 },
        N07_08: { desc: "-7.8",  val: 13 },
        N06_09: { desc: "-6.9",  val: 14 },
        N05_09: { desc: "-5.9",  val: 15 },
        N04_95: { desc: "-4.95",  val: 16 },
        N04_00: { desc: "-4",  val: 17 },
        N03_15: { desc: "-3.15",  val: 18 },
        N02_45: { desc: "-2.45",  val: 19 },
        N01_08: { desc: "-1.8",  val: 20 },
        N01_03: { desc: "-1.3",  val: 21 },
        N00_85: { desc: "-0.85",  val: 22 },
        N00_05: { desc: "-0.5",  val: 23 },
        N00_15: { desc: "-0.15",  val: 24 },
        P00_00: { desc: "0",  val: 25 },
        P01_00: { desc: "1",  val: 26 },
        P02_00: { desc: "2",  val: 27 },
        P03_00: { desc: "3",  val: 28 },
        P04_00: { desc: "4",  val: 29 },
        P05_00: { desc: "5",  val: 30 },
        P06_00: { desc: "6",  val: 31 },
    }, 
    default_val: 25,
}

export const BLE_CNX_ADV_DURATION: Param_i32 = { 
    id: 0x0B01, 
    name: 'ble_cnx_adv_duration',
    title: 'Adverisement Duration',
    desc: 'BLE connection Adverisement Duration',
    type: "i32", 
    min_val: 30, 
    max_val: 2147483647, 
    default_val: 60, 
    unit: "s",
}

export const BLE_CNX_BEHAVIOR: Param_options = { 
    id: 0x0B02, 
    name: 'ble_cnx_behavior',
    title: 'Passkey and SlowAdv behavior',
    desc: 'BLE connection Passkey and Slow Advertisement behavior',
    type: "options", 
    options: { 
        disabled: { desc: "Disabled",  val: 0 },
        enabled_no_passkey: { desc: "Enabled - No passkey",  val: 1 },
        enabled_passkey: { desc: "Enabled - Passkey",  val: 2 },
        enabled_no_passkey_no_slow_adv: { desc: "Enabled - No passkey - No slow adv",  val: 3 },
        enabled_passkey_no_slow_adv: { desc: "Enabled - Passkey - No slow adv",  val: 4 },
    }, 
    default_val: 1,
}

export const BLE_BEACON_TX_POWER: Param_i32 = { 
    id: 0x0B03, 
    name: 'ble_beacon_tx_power',
    title: 'TX Power',
    desc: 'Beaconing TX Power',
    type: "i32", 
    min_val: 0, 
    max_val: 31, 
    default_val: 25, 
    unit: "dBm",
}

export const BLE_BEACON_TYPE: Param_options = { 
    id: 0x0B04, 
    name: 'ble_beacon_type',
    title: 'Beaconing Type',
    desc: 'Beaconing Type',
    type: "options", 
    options: {
        beaconing_is_disabled: { desc: "Beaconing is Disabled", val: 0 },
        eddystone_uid: { desc: "Eddystone UID",  val: 1 },
        i_beacon: { desc: "I-Beacon",  val: 2 },
        altbeacon: { desc: "AltBeacon",  val: 3 },
        quuppa: { desc: "QUUPPA",  val: 4 },
        exposure: { desc: "Exposure",  val: 5 },
    }, 
    default_val: 0,
}

export const BLE_BEACON_IDENTIFIER: Param_bytearray = { 
    id: 0x0B05, 
    name: 'ble_beacon_identifier',
    title: 'Beacon identifier',
    desc: 'Beacon identifier',
    type: "bytearray_beacon_id", // len = 16 | 24
    // default_encoded_val: [
    //     0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
    //     0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00
    // ],
    default_val: "000000000000000000000000000000000000000000000000",
    len: 24, // len = 16 | 24

    // encode: function(hex) {
    //     if ( hex.startsWith('0x') || hex.startsWith('0X') ) { hex = hex.slice(2) }
    //     const len = hex.length / 2;
    //     if ( ( (len==16) || (len==24) ) && REGEXP_HEXSTRING.test(hex) ) {

    //         const byteArray = [];
    //         for (let i=0; i<len; i++) {
    //             byteArray.push(
    //                 parseInt(hex.substr(i*2, 2), 16)
    //             )
    //         }
    //         return {
    //             val: byteArray,
    //             err: '',
    //         }

    //     } else {
    //         return {
    //             val: undefined,
    //             err: `must be a valid Hexadecimal String representation of 16 or 24 bytes`,
    //         }
    //     } 
    // },
    // decode: function(bytes) {
    //     const len = bytes.length;
    //     if ( (len==16) || (len==24) ) {
    //         let hex = '';
    //         for (const byte of bytes) {
    //             if (byte !== (byte & 0xff) ) {
    //                 return {
    //                     val: undefined,
    //                     err: `must be an array of 16 or 24 bytes`,
    //                 }
    //             } 
    //             hex += (byte >>> 4).toString(16);
    //             hex += (byte & 0xf).toString(16);
    //         }
    //         return {
    //             val: hex,
    //             err: '',
    //         }
    //     } else {
    //         return {
    //             val: undefined,
    //             err: `must be an array of 16 or 24 bytes`,
    //         }
    //     }  
    // },
}

export const BLE_BEACON_FAST_ADV_INTERVAL: Param_i32 = { 
    id: 0x0B06, 
    name: 'ble_beacon_fast_adv_interval',
    title: 'Fast advertisement interval',
    desc: 'Beaconing fast advertisement interval',
    type: "i32", 
    min_val: 20, 
    max_val: 10240, 
    default_val: 333, 
    unit: "ms",
}

export const BLE_BEACON_SLOW_ADV_INTERVAL: Param_i32 = { 
    id: 0x0B07, 
    name: 'ble_beacon_slow_adv_interval',
    title: 'Slow advertisement interval',
    desc: 'Beaconing slow advertisement interval',
    type: "i32", 
    min_val: 20, 
    max_val: 10240, 
    default_val: 1000, 
    unit: "ms",
}





export const PARAMS_AT3: Param_type[] = [
    SYS_HIGHEST_TEMPERATURE, 
    SYS_LOWEST_TEMPERATURE, 
    SYS_POWER_CONSUMPTION,
    SYS_CLI_PASSWORD, 

    CORE_MONITORING_PERIOD, 
    CORE_STATUS_PERIOD, 
    CORE_NOTIF_ENABLE, 
    CORE_TEMP_HIGH_THRESHOLD, 
    CORE_TEMP_LOW_THRESHOLD, 
    CORE_TEMP_HYSTERESIS, 
    CORE_BUTTON1_MAP, 
    CORE_BUTTON2_MAP, 
    CORE_BUTTONS_TIMING, 
    CORE_LED0_MAP, 
    CORE_LED1_MAP, 
    CORE_BUZZER_MAP, 
    CORE_ALMANAC_VALIDITY, 
    CORE_ALMANAC_OUTDATED_RATIO, 

    GEOLOC_MOTION_PERIOD, 
    GEOLOC_STATIC_PERIOD, 
    GEOLOC_SOS_PERIOD, 
    GEOLOC_MOTION_NB_START, 
    GEOLOC_MOTION_NB_STOP, 
    GEOLOC_START_STOP_PERIOD, 
    GEOLOC_GNSS_HOLD_ON_MODE, 
    GEOLOC_GNSS_HOLD_ON_TIMEOUT, 
    GEOLOC_PROFILE0_TRIGGERS, 
    GEOLOC_PROFILE1_TRIGGERS, 
    GEOLOC_PROFILE2_TRIGGERS, 
    GEOLOC_GBE_PROFILE0_TECHNO, 
    GEOLOC_GBE_PROFILE1_TECHNO, 
    GEOLOC_GBE_PROFILE2_TECHNO, 

    GNSS_CONSTELLATION, 
    GNSS_MAX_TIME, 
    GNSS_T0_TIMEOUT_STATIC, 
    GNSS_EHPE_STATIC, 
    GNSS_CONVERGENCE_STATIC, 
    GNSS_T0_TIMEOUT_MOTION, 
    GNSS_EHPE_MOTION, 
    GNSS_CONVERGENCE_MOTION, 
    GNSS_STANDBY_TIME, 
    GNSS_AGNSS_MAX_TIME, 
    GNSS_T1_TIMEOUT, 

    LR_CONSTELLATION, 
    LR_SCAN_MODE, 
    LR_NB_SCAN, 
    LR_INTER_SCAN_TIME, 
    LR_WIFI_REPORT_NB_BSSID, 
    LR_WIFI_MIN_NB_BSSID, 
    LR_WIFI_MIN_RSSI, 
    LR_WIFI_BSSID_MAC_TYPE, 

    BLE_SCAN1_DURATION, 
    BLE_SCAN1_WINDOW, 
    BLE_SCAN1_INTERVAL, 
    BLE_SCAN1_TYPE, 
    BLE_SCAN1_MIN_RSSI, 
    BLE_SCAN1_MIN_NB_BEACONS, 
    BLE_SCAN1_FILTER1_MASK, 
    BLE_SCAN1_FILTER1_VALUE, 
    BLE_SCAN1_FILTER1_OFFSET, 
    BLE_SCAN1_FILTER2_MASK, 
    BLE_SCAN1_FILTER2_VALUE, 
    BLE_SCAN1_FILTER2_OFFSET, 
    BLE_SCAN1_NB_BEACONS, 
    BLE_SCAN1_REPORT_TYPE, 
    BLE_SCAN1_REPORT_ID_OFS, 
    
    BLE_SCAN2_DURATION, 
    BLE_SCAN2_WINDOW, 
    BLE_SCAN2_INTERVAL, 
    BLE_SCAN2_TYPE, 
    BLE_SCAN2_MIN_RSSI, 
    BLE_SCAN2_MIN_NB_BEACONS, 
    BLE_SCAN2_FILTER1_MASK, 
    BLE_SCAN2_FILTER1_VALUE, 
    BLE_SCAN2_FILTER1_OFFSET, 
    BLE_SCAN2_FILTER2_MASK, 
    BLE_SCAN2_FILTER2_VALUE, 
    BLE_SCAN2_FILTER2_OFFSET, 
    BLE_SCAN2_NB_BEACONS, 
    BLE_SCAN2_REPORT_TYPE, 
    BLE_SCAN2_REPORT_ID_OFS, 

    ACCELERO_MOTION_SENSI, 
    ACCELERO_MOTION_DURATION, 
    ACCELERO_FULL_SCALE, 
    ACCELERO_OUTPUT_DATA_RATE, 
    ACCELERO_SHOCK_THRESHOLD, 

    NET_SELECTION, 
    NET_RECONNECTION_SPACING, 
    NET_MAIN_PROBE_TIMEOUT, 

    LORAWAN_CNX_TIMEOUT, 
    LORAWAN_DL_TRIGGER_PERIOD, 
    LORAWAN_PROBE_MAX_ATTEMPTS, 
    LORAWAN_PROBE_PERIOD, 
    LORAWAN_CONFIRM_NOTIF_MAP,
    LORAWAN_CONFIRM_NOTIF_RETRY, 
    LORAWAN_S1_TX_STRATEGY, 
    LORAWAN_S1_UL_PORT, 
    LORAWAN_S1_DL_PORT, 

    CELL_SIM_INTERFACE, 
    CELL_NETWORK_TYPE, 
    CELL_SEARCH_BANDS,
    CELL_CNX_TIMEOUT_STATIC, 
    CELL_CNX_TIMEOUT_MOTION, 
    CELL_NW_LOST_TIMEOUT, 
    CELL_CNX_MAX_ATTEMPTS, 
    CELL_ACCESS_POINT_NAME,
    CELL_OPERATOR_SIM_SLOT_0,
    CELL_OPERATOR_SIM_SLOT_1,
    CELL_LOW_POWER_MODE, 
    CELL_PSM_TAU_PERIOD, 
    CELL_PSM_ACTIVE_TIME, 
    CELL_EDRX_PCL, 
    CELL_EDRX_PTW, 
    CELL_RAI_TIMEOUT, 
    CELL_MAX_PROBE_ATTEMPTS, 
    CELL_PROBE_PERIOD, 
    CELL_S1_TRANSPORT_PROTO, 
    CELL_S1_IP_URL_ADDR,
    CELL_S1_DST_IP_PORT, 
    CELL_S1_SRC_IP_PORT, 
    CELL_S1_TX_AGGR_TIME, 

    BLE_CNX_TX_POWER, 
    BLE_CNX_ADV_DURATION, 
    BLE_CNX_BEHAVIOR, 
    BLE_BEACON_TX_POWER, 
    BLE_BEACON_TYPE, 
    BLE_BEACON_IDENTIFIER, 
    BLE_BEACON_FAST_ADV_INTERVAL, 
    BLE_BEACON_SLOW_ADV_INTERVAL, 
];