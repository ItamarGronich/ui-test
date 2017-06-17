import { Activity } from '../model/activity/activity';

export const ACTIVITIES: Activity[] = [
  {
    uName: 'Nina Jones'
  , message: 'Hey you! it\'s me again i\'ve attached new information regarding '
  , time: new Date()
  , icon: '/assets/images/icons/user1.png'
  }
, {
    uName: 'Nina Jones'
  , message: 'Hey I\'ve attached some new PSD files for you to go over.'
  , time: new Date()
  , icon: '/assets/images/icons/user2.png'
  }
, {
    uName: 'James Smith'
  , message: 'Good morning! You are fired!'
  , time: new Date('June 5, 2017 16:40:00')
  , icon: '/assets/images/icons/user3.png'
  }
, {
    uName: 'Nina Jones'
  , message: 'Hello could you bring me cofee please?'
  , time: new Date('June 1, 2017 13:13:00')
  , icon: '/assets/images/icons/user4.png'
  }
];
