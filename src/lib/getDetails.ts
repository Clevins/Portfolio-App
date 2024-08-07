import { Detail } from "./customTypes";

const getDetails = () => {
  return [
    { label: "Birthday", body: "11.06.1998" },
    { label: "Email", body: "cormaclevins@outlook.ie" },
    { label: "Phone", body: "(+353) 86 209 8913 " },
    { label: "Nation", body: "Ireland" },
    { label: "Degree", body: "BSc In Computing" },
    { label: "Interest", body: "Reading & Cooking" },
  ] as Detail[];
};

export default getDetails;
