// import React, { useEffect, useState } from 'react';
// import parse from 'html-react-parser';

// const ContentWithTOC = ({ htmlContent }) => {
//   const [headings, setHeadings] = useState([]);

//   useEffect(() => {
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = htmlContent;
//     const ps = tempElement.querySelectorAll('p');
//     const newHeadings = Array.from(ps).map((p, index) => {
//       const id = `heading-${index}`;
//       p.id = id;
//       return {
//         id,
//         text: p.innerText,
//       };
//     });
//     setHeadings(newHeadings);
//   }, [htmlContent]);

//   const handleScroll = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="flex">
//       <nav className="w-1/4 p-4">
//         <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
//         <ul className="list-disc list-inside">
//           {headings.map((heading) => (
//             <li key={heading.id}>
//               <button
//                 className="text-blue-500 hover:underline"
//                 onClick={() => handleScroll(heading.id)}
//               >
//                 {heading.text}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <main className="content w-3/4 p-4">
//         {parse(htmlContent)}
//       </main>
//     </div>
//   );
// };

// export default ContentWithTOC;
// Sử dụng thành phần và lấy dữ liệu từ API
// pages/index.js

// jsx
// Sao chép mã
// import React, { useEffect, useState } from 'react';
// import ContentWithTOC from '../components/ContentWithTOC';

// const HomePage = () => {
//   const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     // Giả sử bạn có một API endpoint để lấy nội dung HTML
//     const fetchHtmlContent = async () => {
//       const response = await fetch('https://api.example.com/content');
//       const data = await response.text();
//       setHtmlContent(data);
//     };

//     fetchHtmlContent();
//   }, []);

//   return (
//     <div>
//       <ContentWithTOC htmlContent={htmlContent} />
//     </div>
//   );
// };

// export default HomePage;