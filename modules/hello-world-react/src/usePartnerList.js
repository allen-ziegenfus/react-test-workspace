import { useState, useEffect } from "react";

export default function usePartnerList() {
  const [partnerList, setPartnerList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestPartnerList();

    async function requestPartnerList() {
      setPartnerList([]);
      setStatus("loading");
      const res = await fetch(
        `https://www-dev.liferay.com/osb-partnership-portlet/partnership/partnership_entries`
      );
      const json = await res.json();
      setPartnerList(json);
      setStatus("loaded");
    }
  }, []);

  return [partnerList, status];
}
