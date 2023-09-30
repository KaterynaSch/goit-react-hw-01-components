import { ItemName, StatsList, StatsListItem } from "components/Profile/Profile.styled"
import { SectionStat, StatisticsTitle } from "./Statistics.styled"


export const Statistics = ({title,stats}) => {   
    
  return (
    <SectionStat>
          {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatsList>
        {stats.map((item) => ( <StatsListItem key={item.id} className="item">
            <ItemName>{item.label}</ItemName>
            <span>{item.percentage + '%' }</span>
        </StatsListItem>))}      
    </StatsList>
  </SectionStat>
  )
    
}

