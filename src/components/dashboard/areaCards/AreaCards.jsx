import AreaCard from "./AreaCard";
import "./AreaCards.scss";


const AreaCards = () => {
    return (
      <section className="content-area-cards">
        <AreaCard
          colors={["#e4e8ef", "#475be8"]}
          percentFillValue={80}
          cardInfo={{
            title: "Highest Increase (GWP) from 2022 to 2021.",
            value: "41336.0568",
            text: "Broker Name:Convex ",
          }}
        />
        <AreaCard
          colors={["#e4e8ef", "#f29a2e"]}
          percentFillValue={40}
          cardInfo={{
            title: "Highest Increase Planned GWP from 2022 to 2021",
            value: "1378333.595",
            text: "Broker Name:Convex",
          }}
          />
          
          <AreaCard
          colors={["#e4e8ef", "#f29a2e"]}
          percentFillValue={40}
          cardInfo={{
            title: "Highest Increase (GWP) from 2022 to 2021.",
            value: "2499049",
            text: "Financial Institution class had the most Business Plan increase",
          }}
        />
         <AreaCard
          colors={["#e4e8ef", "#f29a2e"]}
          percentFillValue={40}
          cardInfo={{
            title: "Highest Increase  Business Plan from 2022 to 2021",
            value: "  2493358",
            text: "Financial Institution,  class_type:D&O",
          }}
        />
         <AreaCard
          colors={["#e4e8ef", "#f29a2e"]}
          percentFillValue={40}
          cardInfo={{
            title: "Highest Increase  Business Plan from 2022 to 2021",
            value: " 2291233",
            text: "Financial Institution,class_type:FIPI",
          }}
        />
      </section>
    );
  };
  
export default AreaCards;
