import React, { useState } from "react";

import "./App.css";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
//tippy library and core ccss
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

//react countup
import CountUp, { useCountUp } from "react-countup";
import IdleTimeContainer from "./components/IdleTimeContainer";

//chromepicker
import { ChromePicker } from "react-color";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something Went Wrong !<button onClick={closeToast}>Close</button>
    </div>
  );
};
Modal.setAppElement("#root");
toast.configure();
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  });

  const notify = () => {
    toast("Baisc Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
    toast.success("success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    });
    toast.info("Info Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000
    });
    toast.error("Error Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    toast("Baisc Notification !", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const [color, setcolor] = useState("#fff");
  const [showColorPicker, setshowColorPicker] = useState(false);
  const [selectedDate, setselectedDate] = useState(null);

  return (
    <div className="App">
      <h3>
        Welcome from Practical React Where we implement different important
        optional components
      </h3>
      <h4>This is from react-icons</h4>
      <MdAlarm color="purple" size="10rem" />
      <h4>This is from react-toastify</h4>
      <button onClick={notify}>Notify</button>
      <h4>This is from react-modal</h4>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey"
          },
          content: {
            color: "orange"
          }
        }}
      >
        <h2>Modal Tile</h2>
        <p>Modal Body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
      <h4>This is from '@tippy.js/react'</h4>

      {/* comon props are dealy={} and arrow={} and placement={'right','top,etc'} arrow or not */}
      <Tippy content="Hover Over Me">
        <button>Hover Over Me</button>
      </Tippy>

      {/* yarn add react-countup */}
      <h4>This is from count up library</h4>
      <div style={{ fontSize: "40px" }}>
        <CountUp end={200} />
      </div>
      <strong>Duration animation is 5 second / default is 2 second</strong>
      <div style={{ fontSize: "40px" }}>
        <CountUp end={200} duration={5} />
      </div>
      <strong>Count up from 500 to 1000 Duration animation is 5 second</strong>
      <div style={{ fontSize: "40px" }}>
        <CountUp start={500} end={1000} duration={5} />
      </div>
      <strong>Count up from 0 to 1000 Duration animation is 5 second</strong>
      <div style={{ fontSize: "40px" }}>
        <CountUp end={1000} prefix="$" decimals={2} duration={5} />
      </div>
      <strong>Count up from 0 to 1000 Duration animation is 5 second</strong>
      <div style={{ fontSize: "40px" }}>
        <CountUp end={1000} suffix=" USD" decimals={2} duration={5} />
      </div>

      <strong>Count up Numbe custom controls using its hooks</strong>
      <div style={{ fontSize: "40px" }}>
        <h2>{countUp}</h2>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>

      {/* ideal timer for your application */}
      <h4>This is from react-idle-timer library</h4>
      <IdleTimeContainer />

      {/* react-color for your application */}
      <h4>This is from react-color library</h4>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={updateColor => setcolor(updateColor.hex)}
        />
      )}
      <button
        onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}
      >
        {showColorPicker ? "Close Color Picker" : "Show Color Picker"}
      </button>
      <strong>{color}</strong>

      <h4>This is from react-datepicker library</h4>
      <ReactDatePicker
        selected={selectedDate}
        onChange={date => setselectedDate(date)}
        dateFormat="yyyy/MM/dd"
        maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable={true}
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
