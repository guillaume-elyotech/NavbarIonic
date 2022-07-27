import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
import Square from '../components/Square/Square';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
          hi
        </IonHeader>
<div className='flex'>
<div id="square">
    <IonIcon icon={bookOutline}  className="book"/>
    </div>
</div>
   

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
