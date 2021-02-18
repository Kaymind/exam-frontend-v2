import { HomePage } from './HomePage';
import { withHomePage } from './withHomePage';

const connectedHomePage = withHomePage(HomePage);

export { connectedHomePage as HomePage };
