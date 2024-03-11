const vehicleId = process.argv[2];
const fromDate = process.argv[3];
const toDate = process.argv[4];

const body = `vehicleId=123&reportTypeMaskValue=0&fromDate=${fromDate}T00%3A00%3A00&toDate=${toDate}T00%3A00%3A00&allowUpdateRoad=false`;

fetch("https://webapp.quanlyxe.vn/Vehicle/CallReportJob", {
  "headers": {
    "accept": "*/*",
    "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": body,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((response) => {
    console.log(`Plate: ${vehicleId} - status: ${response.statusText}` );
})