export const isMobileUserAgent = () => {
  const userAgent = window.navigator.userAgent;
  // Các chuỗi user-agent thường xuất hiện trên thiết bị di động
  const mobileKeywords = [
    "Mobile",
    "iPhone",
    "Android",
    "BlackBerry",
    "IEMobile",
    "Opera Mini",
    "Windows Phone",
  ];

  // Kiểm tra xem user-agent có chứa các từ khóa của thiết bị di động không
  for (const keyword of mobileKeywords) {
    if (userAgent.indexOf(keyword) !== -1) {
      return true; // User-agent là của thiết bị di động
    }
  }

  return false; // User-agent không phải là của thiết bị di động
};
