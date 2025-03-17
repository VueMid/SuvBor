// import React, { useState } from "react";
// import { locales } from "@/store";
// import { Link } from "@/i18n/routing";
// import { usePathname } from "next/navigation";
// import { useLocale } from "next-intl";
// import {
//   ArrowDown,
//   EngFlag,
//   RusFlag,
//   UzbFlag,
// } from "../../../public/icons/Icons";

// const HeaderLang = () => {
//   const [lagDropdown, setLagDropdown] = useState(false);
//   const pathname = usePathname();
//   const locale = useLocale();

//   return (
//     <button
//       className="flex items-center gap-x-3 relative h-full"
//       onClick={() => setLagDropdown(!lagDropdown)}
//       onMouseLeave={() => setLagDropdown(false)}
//     >
//       {locale === "uz" ? (
//         <>
//           <div className="flex items-center gap-x-1">
//             <div className="bg-white rounded-sm overflow-hidden">
//               <UzbFlag />
//             </div>
//             <span>O’zb</span>
//           </div>
//           <div
//             className={`${lagDropdown && "rotate-0"} -rotate-90 duration-300`}
//           >
//             <div className="arrow_down">
//               <ArrowDown />
//             </div>
//           </div>
//         </>
//       ) : locale === "ru" ? (
//         <>
//           <div className="flex items-center gap-x-1">
//             <div className="bg-white rounded-sm overflow-hidden">
//               <RusFlag />
//             </div>
//             <span>Rus</span>
//           </div>
//           <div
//             className={`${lagDropdown && "rotate-0"} -rotate-90 duration-300`}
//           >
//             <div className="arrow_down">
//               <ArrowDown />
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="flex items-center gap-x-1">
//             <div className="bg-white rounded-sm overflow-hidden">
//               <EngFlag />
//             </div>
//             <span>Eng</span>
//           </div>
//           <div
//             className={`${lagDropdown && "rotate-0"} -rotate-90 duration-300`}
//           >
//             <div className="arrow_down">
//               <ArrowDown />
//             </div>
//           </div>
//         </>
//       )}
//       <div
//         className={`absolute top-[40px] z-10 lang_dropdown-shadow left-1/2 -translate-x-1/2 px-[14px] py-4 rounded-[10px] bg-white dark:bg-[#233342] transition-all duration-500 ${
//           lagDropdown ? "visible opacity-100" : "collapse opacity-0"
//         }`}
//       >
//         <div className="w-3 h-3 bg-white dark:bg-[#233342] rotate-45 absolute top-[-4px] right-[24px]"></div>
//         <ul className="locale_list flex flex-col gap-y-[14px]">
//           {locales
//             .filter((el) => el.key !== locale)
//             .map((el) => {
//               const newPathname = pathname.replace(`/${locale}`, "") || "/";

//               return (
//                 <li key={el.key}>
//                   <Link
//                     href={`${newPathname}`}
//                     locale={el.key}
//                     className={`flex items-center gap-x-[6px] text-sm duration-200 hover:text-[#0353bd] ${
//                       locale === el.key
//                         ? "text-[#0353bd]"
//                         : "text-black dark:text-white"
//                     }`}
//                   >
//                     {el.flag}
//                     {el.title}
//                   </Link>
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//     </button>
//   );
// };

// export default HeaderLang;
