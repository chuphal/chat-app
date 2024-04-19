import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex mt-1">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text"> Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// Starting code of this component

// import React from "react";

// const GenderCheckBox = () => {
//   return (
//     <div className="flex mt-1">
//       <div className="form-control">
//         <label className="label cursor-pointer gap-2">
//           <span className="label-text"> Male</span>
//           <input
//             type="checkbox"
//             defaultChecked
//             className="checkbox border-slate-900"
//           />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className="label cursor-pointer gap-2">
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             defaultChecked
//             className="checkbox border-slate-900"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
