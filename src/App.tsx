import { useState, useRef, useEffect } from 'react';
import { TabItem, Tabs } from 'flowbite-react';


// import './App.css'

import { BqNavbar } from './components/BqNavbar';
import { OptionalParamI32 } from './components/OptionalParamI32';
import { ParamI32 } from './components/ParamI32';
import { ParamOptions } from './components/ParamOptions';
import { ParamCoreNotifXxx } from './components/ParamCoreNotifXxx';
import { ParamCoreButtonXMap } from './components/ParamCoreButtonXMap';
import { ParamCoreButtonsTiming } from './components/ParamCoreButtonsTiming';
import { ParamCoreLedXMap } from './components/ParamCoreLedXMap';
import { ParamCoreBuzzerMap } from './components/ParamCoreBuzzerMap';
import { ParamGeolocProfileXTriggers } from './components/ParamGeolocProfileXTriggers';
import { ParamGeolocGbeProfileXTechno } from './components/ParamGeolocGbeProfileXTechno';
import { ParamBytearray } from './components/ParamBytearray';
import { PramLorawanS1TxStrategy } from './components/PramLorawanS1TxStrategy';
import { ParamString } from './components/ParamString';
import { ParamCellPsmTimeXXX } from './components/ParamCellPsmTimeXXX';
import { ParamCellSearchBands } from './components/ParamCellSearchBands';
// Param_cell_psm_time_XXX
// Param_cell_search_bands

import { 

  SYS_HIGHEST_TEMPERATURE, 
  SYS_LOWEST_TEMPERATURE, 
  SYS_POWER_CONSUMPTION, 
  
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
  SYS_CLI_PASSWORD, 

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

} from './abw/params_at3';

import { open_template_config_file } from './open-config';

function App() {

  
  const empty_params: Record<string, string|null> = {};
  const params_ref = useRef({...empty_params});
  const defpar_ref = useRef<Record<string, string|null>|undefined>(undefined);
  
  useEffect(
    () => { 
      (async () => {
        defpar_ref.current = await open_template_config_file()
      })()
    },
    []
  );
  

  const [dummy_state, set_dummy_state] = useState(0);

  return (
    <>

      <BqNavbar params_ref={params_ref} defpar_ref={defpar_ref} set_dummy_state={set_dummy_state} />



        { (Object.keys(params_ref.current).length === 0) && (
          <div className="p-5 dark:bg-black dark:text-white">
            Please open a new file or start with a new default configuration!
          </div>
        ) }

        { (Object.keys(params_ref.current).length !== 0) && (defpar_ref !== undefined) && ( 

          <div className="dark:bg-black">

          <Tabs aria-label="Full width tabs" variant="default" className="p-1">
            <TabItem title="System">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                System Parameters
              </h2>
              
              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <div className="col-span-full">
                  <p>
                    System parameters used for internal telemetry and not exported from Abeeway devices by the Beehive tool and usually not added to the configuration file by Beequeen either.
                  </p>
                  <p>
                    However, there are special cases when you may want to reset the values of these parameters by writing them out into a configuration file and import them into a device.
                  </p>
                  <p>                
                    Use the checkboxes in front of the labels to select the parameters you want to add to the configuration file. 
                  </p>
                </div>

                <OptionalParamI32 param_const={SYS_HIGHEST_TEMPERATURE} params_ref={params_ref} dummy_state={dummy_state}/> 
                <OptionalParamI32 param_const={SYS_LOWEST_TEMPERATURE} params_ref={params_ref} dummy_state={dummy_state}/> 
                <OptionalParamI32 param_const={SYS_POWER_CONSUMPTION} params_ref={params_ref} dummy_state={dummy_state}/>
              
              </div>

            </TabItem>
            <TabItem active title="Core">
              
              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                Core Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              
                <div className="col-span-3 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Button Settings</h6>
                  <div className="grid grid-cols-3 gap-3">
                    <ParamCoreButtonXMap param_const={CORE_BUTTON1_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                    <ParamCoreButtonXMap param_const={CORE_BUTTON2_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                    <ParamCoreButtonsTiming param_const={CORE_BUTTONS_TIMING} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  </div>
                </div>
                
                <div className="col-span-2 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <ParamCoreLedXMap param_const={CORE_LED0_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-2 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">             
                  <ParamCoreLedXMap param_const={CORE_LED1_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-2 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">             
                  <ParamCoreBuzzerMap param_const={CORE_BUZZER_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <ParamCoreNotifXxx param_const={CORE_NOTIF_ENABLE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <ParamI32 param_const={CORE_TEMP_HIGH_THRESHOLD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={CORE_TEMP_LOW_THRESHOLD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={CORE_TEMP_HYSTERESIS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-1 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <ParamI32 param_const={CORE_MONITORING_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={CORE_STATUS_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-1 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <ParamI32 param_const={CORE_ALMANAC_VALIDITY} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={CORE_ALMANAC_OUTDATED_RATIO} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <h6 className="text-sm font-bold">CLI Password</h6>
                  <p>This value is not written into the config file unless the checkbox before the parameter name is checked!</p>
                  <OptionalParamI32 param_const={SYS_CLI_PASSWORD} params_ref={params_ref} dummy_state={dummy_state}/>
                </div>
              
              </div>

            </TabItem>
            <TabItem title="Geoloc">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                Geolocation Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Geolocation Profile #0</h6>
                  <div className="grid grid-cols-2 gap-3">
                    <ParamGeolocProfileXTriggers param_const={GEOLOC_PROFILE0_TRIGGERS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                    <ParamGeolocGbeProfileXTechno param_const={GEOLOC_GBE_PROFILE0_TECHNO} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                  </div> 
                </div>
                
                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                <h6 className="text-sm font-bold">Geolocation Profile #1</h6>
                  <div className="grid grid-cols-2 gap-3">
                    <ParamGeolocProfileXTriggers param_const={GEOLOC_PROFILE1_TRIGGERS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                    <ParamGeolocGbeProfileXTechno param_const={GEOLOC_GBE_PROFILE1_TECHNO} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  </div>
                </div>

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Geolocation Profile #2</h6>
                  <div className="grid grid-cols-2 gap-3">
                    <ParamGeolocProfileXTriggers param_const={GEOLOC_PROFILE2_TRIGGERS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                    <ParamGeolocGbeProfileXTechno param_const={GEOLOC_GBE_PROFILE2_TECHNO} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  </div>
                </div>

                <ParamI32 param_const={GEOLOC_MOTION_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_STATIC_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_SOS_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_MOTION_NB_START} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_MOTION_NB_STOP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_START_STOP_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={GEOLOC_GNSS_HOLD_ON_MODE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GEOLOC_GNSS_HOLD_ON_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="GNSS">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                GNSS Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <ParamOptions param_const={GNSS_CONSTELLATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Static state parameters</h6>
                  <ParamI32 param_const={GNSS_T0_TIMEOUT_STATIC} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={GNSS_EHPE_STATIC} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={GNSS_CONVERGENCE_STATIC} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                <h6 className="text-sm font-bold">Motion state parameters</h6>
                  <ParamI32 param_const={GNSS_T0_TIMEOUT_MOTION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={GNSS_EHPE_MOTION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={GNSS_CONVERGENCE_MOTION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>

                <ParamI32 param_const={GNSS_MAX_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <ParamI32 param_const={GNSS_STANDBY_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GNSS_AGNSS_MAX_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={GNSS_T1_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="LR11xx">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                LR11xx Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  GNSS parameters
                </h3>

                <ParamOptions param_const={LR_CONSTELLATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  WiFi Scan parameters
                </h3>

                <ParamOptions param_const={LR_SCAN_MODE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LR_NB_SCAN} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LR_INTER_SCAN_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LR_WIFI_REPORT_NB_BSSID} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LR_WIFI_MIN_NB_BSSID} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LR_WIFI_MIN_RSSI} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={LR_WIFI_BSSID_MAC_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="BLE Scan">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                BLE Scan Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  Scan profile #1
                </h3>

                <ParamI32 param_const={BLE_SCAN1_DURATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN1_WINDOW} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN1_INTERVAL} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_SCAN1_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN1_MIN_RSSI} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN1_MIN_NB_BEACONS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
              
                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Scan profile #1 - Filter #1</h6>
                  <ParamBytearray param_const={BLE_SCAN1_FILTER1_MASK} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamBytearray param_const={BLE_SCAN1_FILTER1_VALUE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                  <ParamI32 param_const={BLE_SCAN1_FILTER1_OFFSET} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Scan profile #1 - Filter #2</h6>
                  <ParamBytearray param_const={BLE_SCAN1_FILTER2_MASK} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamBytearray param_const={BLE_SCAN1_FILTER2_VALUE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={BLE_SCAN1_FILTER2_OFFSET} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>
                
                <ParamI32 param_const={BLE_SCAN1_NB_BEACONS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_SCAN1_REPORT_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN1_REPORT_ID_OFS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  Scan profile #2
                </h3>

                <ParamI32 param_const={BLE_SCAN2_DURATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN2_WINDOW} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN2_INTERVAL} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_SCAN2_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN2_MIN_RSSI} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN2_MIN_NB_BEACONS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Scan profile #2 - Filter #1</h6>
                  <ParamBytearray param_const={BLE_SCAN2_FILTER1_MASK} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamBytearray param_const={BLE_SCAN2_FILTER1_VALUE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={BLE_SCAN2_FILTER1_OFFSET} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <div className="col-span-1 row-span-3 border border-solid rounded-lg p-3 shadow-md grid gap-3 dark:text-white">
                  <h6 className="text-sm font-bold">Scan profile #2 - Filter #2</h6>
                  <ParamBytearray param_const={BLE_SCAN2_FILTER2_MASK} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamBytearray param_const={BLE_SCAN2_FILTER2_VALUE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                  <ParamI32 param_const={BLE_SCAN2_FILTER2_OFFSET} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>

                <ParamI32 param_const={BLE_SCAN2_NB_BEACONS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_SCAN2_REPORT_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_SCAN2_REPORT_ID_OFS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="Accelero">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                Accelerometer Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <ParamI32 param_const={ACCELERO_MOTION_SENSI} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={ACCELERO_MOTION_DURATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={ACCELERO_FULL_SCALE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={ACCELERO_OUTPUT_DATA_RATE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={ACCELERO_SHOCK_THRESHOLD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="Network">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                Generic Network Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <ParamOptions param_const={NET_SELECTION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={NET_RECONNECTION_SPACING} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={NET_MAIN_PROBE_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="LoRaWAN">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                LoRaWAN Network Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <ParamI32 param_const={LORAWAN_CNX_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LORAWAN_DL_TRIGGER_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LORAWAN_PROBE_MAX_ATTEMPTS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LORAWAN_PROBE_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <ParamCoreNotifXxx param_const={LORAWAN_CONFIRM_NOTIF_MAP} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>

                <ParamI32 param_const={LORAWAN_CONFIRM_NOTIF_RETRY} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <div className="col-span-2 row-span-2 border border-solid rounded-lg p-3 shadow-md grid gap-3">
                  <PramLorawanS1TxStrategy param_const={LORAWAN_S1_TX_STRATEGY} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>

                <ParamI32 param_const={LORAWAN_S1_UL_PORT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={LORAWAN_S1_DL_PORT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 



              </div>

            </TabItem>
            <TabItem title="Cellular">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                Cellular Network Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <ParamOptions param_const={CELL_SIM_INTERFACE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={CELL_NETWORK_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <div className="col-span-2 grid">
                  <ParamCellSearchBands param_const={CELL_SEARCH_BANDS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                </div>
                
                <ParamI32 param_const={CELL_CNX_TIMEOUT_STATIC} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_CNX_TIMEOUT_MOTION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_NW_LOST_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_CNX_MAX_ATTEMPTS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamString param_const={CELL_ACCESS_POINT_NAME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamString param_const={CELL_OPERATOR_SIM_SLOT_0} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamString param_const={CELL_OPERATOR_SIM_SLOT_1} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                <ParamOptions param_const={CELL_LOW_POWER_MODE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamCellPsmTimeXXX param_const={CELL_PSM_TAU_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamCellPsmTimeXXX param_const={CELL_PSM_ACTIVE_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_EDRX_PCL} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_EDRX_PTW} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_RAI_TIMEOUT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_MAX_PROBE_ATTEMPTS} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_PROBE_PERIOD} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={CELL_S1_TRANSPORT_PROTO} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamString param_const={CELL_S1_IP_URL_ADDR} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_S1_DST_IP_PORT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_S1_SRC_IP_PORT} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={CELL_S1_TX_AGGR_TIME} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
            <TabItem title="BLE Conn">

              <h2 className="ml-7 text-2xl font-bold text-cyan-600">
                BLE Connection and Beaconing Parameters
              </h2>

              <div className="m-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  Connection Parameters
                </h3>

                <ParamOptions param_const={BLE_CNX_TX_POWER} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_CNX_ADV_DURATION} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_CNX_BEHAVIOR} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

                <h3 className="col-span-full text-lg font-bold text-cyan-600">
                  Beaconing Parameters
                </h3>

                <ParamI32 param_const={BLE_BEACON_TX_POWER} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamOptions param_const={BLE_BEACON_TYPE} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                <div className="col-span-2 grid">
                  <ParamBytearray param_const={BLE_BEACON_IDENTIFIER} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/>
                </div>
                <ParamI32 param_const={BLE_BEACON_FAST_ADV_INTERVAL} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 
                <ParamI32 param_const={BLE_BEACON_SLOW_ADV_INTERVAL} params_ref={params_ref} defpar_ref={defpar_ref} dummy_state={dummy_state}/> 

              </div>

            </TabItem>
          </Tabs>
          </div>

        ) }



    </>
  )
}

export default App
