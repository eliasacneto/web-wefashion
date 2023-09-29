import React  from "react";
import Benefits from "./Benefits/Benefits";
import BenefitsMobile from "./Benefits/BenefitsMobile";

const BenefitsComponent = () => {
    return (
        <>
            <div className="desktop">
                <Benefits/>
            </div>
            <div className="mobile">
                <BenefitsMobile/>
            </div>
        </>
    );
};

export default BenefitsComponent;