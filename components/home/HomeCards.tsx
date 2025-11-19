import { Dimensions, StyleSheet } from "react-native";
import { AppCard } from "../ui/AppCard";
import { AppText } from "../ui/AppText";
import { AppView } from "../ui/AppView";

const { width } = Dimensions.get('window');
// Calculate card width: screen width - parent padding (24*2) - gap between cards (16) / 2 cards
const cardWidth = (width - 48 - 16) / 2;

interface HomeCardsProps {
  title: string;
  icon: React.ReactNode;
}

export const HomeCards = ({ cardsData }: { cardsData: HomeCardsProps[] }) => {
   
  return (
    <AppView className="flex-row flex-wrap mb-4" style={{ gap: 16 }}>
      {cardsData.map((cardData) => (
        <AppView 
          key={cardData.title} 
            style={styles.card}
        >
          <AppCard style={styles.cardContent}>
            {cardData.icon}
            <AppText className="font-semibold text-gray-900 mt-2 mb-1">{cardData.title}</AppText>
          </AppCard>
        </AppView>
      ))}
    </AppView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});