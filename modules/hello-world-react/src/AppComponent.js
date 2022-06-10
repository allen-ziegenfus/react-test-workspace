import React from "react";
import ReactDOM from "react-dom";

import usePartnerList from "./usePartnerList";

export default function AppComponent(props) {
  const [partners] = usePartnerList();
  return (
    <div>
      <h1> Number of partners: {partners.length}</h1>
      <div>
        <span className="tag">
          {Liferay.Language.get("portlet-namespace")}:
        </span>
        <span className="value">{props.portletNamespace}</span>
      </div>
      <div>
        <span className="tag">{Liferay.Language.get("context-path")}:</span>
        <span className="value">{props.contextPath}</span>
      </div>
      <div>
        <span className="tag">
          {Liferay.Language.get("portlet-element-id")}:
        </span>
        <span className="value">{props.portletElementId}</span>
      </div>
      <div>
        <span className="tag">{Liferay.Language.get("configuration")}:</span>
        <span className="value pre">
          {JSON.stringify(props.configuration, null, 2)}
        </span>
      </div>
    </div>
  );
}
