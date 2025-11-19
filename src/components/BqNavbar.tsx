import type React from "react";
import { useState } from "react";
import beequeen_icon from "../assets/beequeen.png";
import beehive_icon from "../assets/beehive.png";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
  Dropdown,
  DropdownItem,
  Modal,
  ModalBody,
  ModalHeader,
  DarkThemeToggle,
} from "flowbite-react";
import {
  open_config_file,
  // open_template_config_file,
  save_config_file,
  export_as_production_config_file,
} from "../open-config";
import { VersionSelect } from "./VersionSelect";
import { FW_VERSION } from "../../version";

export function BqNavbar({
  params_ref,
  defpar_ref,
  set_dummy_state,
}: {
  params_ref: React.RefObject<Record<string, string | null>>;
  defpar_ref: React.RefObject<Record<string, string | null> | undefined>;
  set_dummy_state: React.Dispatch<React.SetStateAction<number>>;
}) {
  // try {

  const [config_file_name, set_config_file_name] = useState("");
  const [show_modal, set_show_modal] = useState(false);
  const [modal_text, set_modal_text] = useState({ title: "", content: "" });

  async function handle_new_from_template_click() {
    if (defpar_ref === undefined) {
      return;
    }
    // eslint-disable-next-line react-hooks/immutability
    params_ref.current = { ...defpar_ref.current };
    set_dummy_state((x) => x + 1);
    set_config_file_name("!! new unsaved config !!");
  }

  async function handle_open_click() {
    if (defpar_ref === undefined) {
      return;
    }

    const { file_name, config_params } = await open_config_file();
    // eslint-disable-next-line react-hooks/immutability
    params_ref.current = config_params;
    set_dummy_state((x) => x + 1);
    set_config_file_name(file_name);
  }

  async function handle_save_as_click() {
    if (Object.keys(params_ref.current).length === 0) return;
    const file_name = await save_config_file(params_ref.current, false);
    set_config_file_name(file_name);
  }

  async function handle_save_as_delta_click() {
    if (Object.keys(params_ref.current).length === 0) return;
    const file_name = await save_config_file(params_ref.current, true);
    if (file_name === "") {
      set_modal_text({
        title: "Alert!",
        content: "This configuration is not different from the default.",
      });
      set_show_modal(true);
      return;
    }
    set_config_file_name(file_name);
  }

  async function handle_export_as_prod_cfg_click() {
    if (Object.keys(params_ref.current).length === 0) return;
    await export_as_production_config_file(params_ref.current, false);
  }

  async function handle_export_as_delta_prod_cfg_click() {
    if (Object.keys(params_ref.current).length === 0) return;
    await export_as_production_config_file(params_ref.current, true);
  }

  function handle_close_clock() {
    // eslint-disable-next-line react-hooks/immutability
    params_ref.current = {};
    set_config_file_name("");
    set_dummy_state((x) => x + 1);
  }

  // async function handle_export_to_delta_cfg_click() {
  //   if (Object.keys(params_ref.current).length === 0) return;
  //   await save_config_file(params_ref.current, true);
  // }

  return (
    <>
      <div className="sticky top-0 z-10 bg-white shadow-md dark:bg-black">
        <Navbar fluid rounded>
          <div className="flex items-center">
            <NavbarBrand
              href="https://docs.thingpark.com/thingpark-location/firmware/functioning"
              target="_blank"
            >
              <img
                src={beequeen_icon}
                className="logo mr-3 h-8 sm:h-12"
                alt="Beequeen Icon"
              />
              <span className="mr-1 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                BeeQueen
              </span>
            </NavbarBrand>

            <span className="text-base font-normal whitespace-nowrap dark:text-white">
              - for
            </span>

            <VersionSelect currentId={FW_VERSION} />

            <span className="ml-10 font-mono whitespace-nowrap dark:text-white">
              {config_file_name}
            </span>
          </div>

          <NavbarToggle />
          <NavbarCollapse>
            <div className="pt-2 pl-3 md:pt-0 dark:text-white">
              <Dropdown label="File" className="inline" inline>
                <DropdownItem onClick={handle_new_from_template_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  New (default)
                </DropdownItem>
                <DropdownItem onClick={handle_open_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 19V6a1 1 0 0 1 1-1h4.032a1 1 0 0 1 .768.36l1.9 2.28a1 1 0 0 0 .768.36H16a1 1 0 0 1 1 1v1M3 19l3-8h15l-3 8H3Z"
                    />
                  </svg>
                  Open...
                </DropdownItem>
                <DropdownItem onClick={handle_save_as_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 0 1 1-1h11.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 4h8v4H8V4Zm7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Save as...
                </DropdownItem>
                <DropdownItem onClick={handle_save_as_delta_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 0 1 1-1h11.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 4h8v4H8V4Zm7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  Save as delta...
                </DropdownItem>

                <DropdownItem onClick={handle_export_as_prod_cfg_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                    />
                  </svg>
                  Export as prod cfg...
                </DropdownItem>
                <DropdownItem onClick={handle_export_as_delta_prod_cfg_click}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                    />
                  </svg>
                  Export as delta prod cfg...
                </DropdownItem>

                <DropdownItem onClick={handle_close_clock}>
                  <svg
                    className="mr-1 h-5 w-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Close
                </DropdownItem>
              </Dropdown>
            </div>
            {/* <div className="pl-3 pt-2 md:pt-0">
              <Dropdown label="Export" className="inline" inline>
                <DropdownItem onClick={handle_export_to_delta_cfg_click}>To 'delta' config file</DropdownItem>
                <DropdownItem>To CLI commands</DropdownItem>
                <DropdownItem>LoRaWAN DL Payloads</DropdownItem>
              </Dropdown>
            </div> */}
            <div className="pt-2 pl-3 md:pt-0 dark:text-white">
              <Dropdown label="Help" className="inline" inline>
                {/* <DropdownItem>User guide...</DropdownItem> */}
                <DropdownItem
                  onClick={() => {
                    window.open(
                      "https://docs.thingpark.com/thingpark-location/firmware/configuration",
                      "AT3ReferenceGuide",
                    );
                  }}
                >
                  AT3 Reeference Guide
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    set_modal_text({
                      title: "About Beequeen",
                      content: `BeeQueen ${FW_VERSION} - Abeeway Configuration Editor Tool for Asset Tracker v${FW_VERSION.substring(2, 3)} firmware ${FW_VERSION.substring(3)}`,
                    });
                    set_show_modal(true);
                  }}
                >
                  About...
                </DropdownItem>
              </Dropdown>
            </div>

            <NavbarLink
              href={`https://nano-things.net/beehive/${FW_VERSION}`}
              target="_blank"
            >
              <img
                src={beehive_icon}
                className="logo inline-block h-6 pr-1 pb-1"
                alt="Beehive Icon"
              />
              Beehive
            </NavbarLink>

            <DarkThemeToggle className="site-xs mb-1 p-0" />
          </NavbarCollapse>
        </Navbar>
      </div>

      <Modal show={show_modal} onClose={() => set_show_modal(false)}>
        <ModalHeader>{modal_text.title}</ModalHeader>
        {/* <Modal.Header/> */}
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {modal_text.content}
            </p>
          </div>
        </ModalBody>
        {/* <Modal.Footer>
          <Button onClick={() => set_show_modal(false)}>OK</Button>
          <Button color="gray" onClick={() => set_about_modal(false)}>
            Decline
          </Button>
        </Modal.Footer> */}
        {/* <Modal.Footer/> */}
      </Modal>
    </>
  );

  // } catch (err) {
  //   console.log(err)
  // }
}
