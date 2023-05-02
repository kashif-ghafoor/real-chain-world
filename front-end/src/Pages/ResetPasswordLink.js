// import { Transition, Dialog } from "@headlessui/react";
// import { Fragment, useRef } from "react";

// const ResetPasswordLinkSend = ({ open, onClose }) => {
//   const cancelButtonRef = useRef(null);
//   return (
//     <>
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative"
//           initialFocus={cancelButtonRef}
//           onClose={onClose}
//         >
//           <div className="flex items-center justify-center min-h-screen">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-10 overflow-y-auto">
//               <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-out duration-300"
//                   enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                   enterTo="opacity-100 translate-y-0 sm:scale-100"
//                   leave="ease-in duration-200"
//                   leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                   leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                 >
//                   <Dialog.Panel className="relative transform overflow-hidden rounded-md bg-white text-center shadow-xl transition-all h-full w-3/5">
//                     <div className="bg-white pb-96 pt-96">
//                       <div className="absolute top-[20px] left-[730px]">
//                         <button
//                           className="bg-transparent text-lightseagreen-100 font-bold text-5xl "
//                           onClick={() => onClose(false)}
//                         >
//                           x
//                         </button>
//                       </div>
//                       <h3 className="absolute top-[100px] left-[280px] text-11xl tracking-[-0.02em]  font-bold text-lightseagreen-100 ">
//                         Link Send Sucessfully
//                       </h3>
//                       <div className="absolute top-[170px] left-[355px]  ">
//                         <img
//                           className="h-15 w-16"
//                           src={require("../assets/logo-signin.png")}
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// };

// export default ResetPasswordLinkSend;
