import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {
  homeOutline,
  bagOutline,
  personOutline,
  heartOutline,
} from "ionicons/icons";
import Tab5 from './pages/Tab5';
import Tab4 from './pages/Tab4';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="tabs/home" />
        <Route exact path="/tabs/home" render={() => <Tab1 />} />
        <Route exact path="/tabs/shopping" render={() => <Tab2 />}  />
        <Route exact path="/tabs/teaching" render={() => <Tab3 />} />
        <Route exact path="/tabs/donation" render={() => <Tab4 />}  />
        <Route exact path="/tabs/userprofile" render={() => <Tab5 />} />
      </IonRouterOutlet>

      <IonTabBar slot="top" className="bar">

        <IonTabButton tab="home" href="/tabs/home" className="tab home">
          <IonIcon icon={homeOutline} />
        </IonTabButton>

        <IonTabButton tab="shopping" href="/tabs/shopping" className="tab shop">
          <IonIcon icon={bagOutline} />
        </IonTabButton>

        <IonTabButton tab="teaching" href="/tabs/teaching" className="tab book indic" >
        <IonIcon icon={bookOutline}  className="bookIndic"/>
        </IonTabButton>

        <IonTabButton tab="donation" href="/tabs/donation" className="tab don">
          <IonIcon icon={heartOutline} />
        </IonTabButton>

        <IonTabButton tab="userprofile" href="/tabs/userprofile" className="tab profile">
          <IonIcon icon={personOutline} />
        </IonTabButton>

      </IonTabBar>
    </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;



