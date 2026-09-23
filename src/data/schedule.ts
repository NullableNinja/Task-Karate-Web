export type BeltFilter = 'all' | 'white-gold' | 'orange' | 'green-purple' | 'blue-red' | 'brown' | 'black' | 'green-up' | 'special';
export type ScheduleDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export type PublicClass = {
  id: string;
  day: ScheduleDay;
  time: string;
  title: string;
  audience: string;
  rankLabel: string;
  rankGroups: BeltFilter[];
  duration: string;
  detail: string;
  tone: 'blue' | 'gold' | 'orange';
};

const kids = (id: string, day: ScheduleDay, time: string, rankLabel: string, rankGroups: BeltFilter[], detail: string, duration = '45 min'): PublicClass => ({ id, day, time, title: 'Kids Karate', audience: 'Kids · ages 5–11', rankLabel, rankGroups, duration, detail, tone: 'blue' });
const teensAdults = (id: string, day: ScheduleDay, time: string, rankLabel: string, rankGroups: BeltFilter[], detail: string, duration = '1 hour'): PublicClass => ({ id, day, time, title: 'Teens & Adults', audience: 'Teens & adults · ages 12+', rankLabel, rankGroups, duration, detail, tone: 'gold' });
const special = (id: string, day: ScheduleDay, time: string, title: string, rankLabel: string, audience: string, detail: string, duration = '45 min'): PublicClass => ({ id, day, time, title, audience, rankLabel, rankGroups: ['special'], duration, detail, tone: 'orange' });

export const scheduleClasses: PublicClass[] = [
  kids('kids-tue-white-gold', 'Tuesday', '6:00 PM', 'White / Gold', ['white-gold'], 'Kids in the White and Gold belt groups practice foundational skills.'),
  kids('kids-thu-white-gold', 'Thursday', '5:00 PM', 'White / Gold', ['white-gold'], 'Kids in the White and Gold belt groups practice foundational skills.'),
  kids('kids-sat-white-gold', 'Saturday', '11:30 AM', 'White / Gold', ['white-gold'], 'Kids in the White and Gold belt groups practice foundational skills.'),
  kids('kids-mon-orange', 'Monday', '4:00 PM', 'Orange', ['orange'], 'Kids in the Orange belt group practice the next stage of the curriculum.'),
  kids('kids-thu-orange', 'Thursday', '6:00 PM', 'Orange', ['orange'], 'Kids in the Orange belt group practice the next stage of the curriculum.'),
  kids('kids-sat-orange', 'Saturday', '11:30 AM', 'Orange', ['orange'], 'Kids in the Orange belt group practice the next stage of the curriculum.'),
  kids('kids-wed-green-purple', 'Wednesday', '5:00 PM', 'Green / Purple', ['green-purple'], 'Kids in the Green and Purple belt groups build on their fundamentals.'),
  kids('kids-thu-green-purple', 'Thursday', '4:00 PM', 'Green / Purple', ['green-purple'], 'Kids in the Green and Purple belt groups build on their fundamentals.'),
  kids('kids-sat-green-purple', 'Saturday', '10:30 AM', 'Green / Purple', ['green-purple'], 'Kids in the Green and Purple belt groups build on their fundamentals.'),
  kids('kids-tue-blue-red', 'Tuesday', '5:00 PM', 'Blue / Red', ['blue-red'], 'Kids in the Blue and Red belt groups work through the intermediate curriculum.'),
  kids('kids-wed-blue-red', 'Wednesday', '4:00 PM', 'Blue / Red', ['blue-red'], 'Kids in the Blue and Red belt groups work through the intermediate curriculum.'),
  kids('kids-sat-blue-red', 'Saturday', '10:30 AM', 'Blue / Red', ['blue-red'], 'Kids in the Blue and Red belt groups work through the intermediate curriculum.'),
  kids('kids-mon-brown', 'Monday', '5:00 PM', 'Brown', ['brown'], 'Brown belt kids train for one hour and focus on the advanced kids curriculum.', '1 hour'),
  kids('kids-tue-brown', 'Tuesday', '5:00 PM', 'Brown', ['brown'], 'Brown belt kids train with the advanced kids curriculum.'),
  kids('kids-wed-brown', 'Wednesday', '4:00 PM', 'Brown', ['brown'], 'Brown belt kids train with the advanced kids curriculum.'),
  kids('kids-sat-brown', 'Saturday', '10:30 AM', 'Brown', ['brown'], 'Brown belt kids train with the advanced kids curriculum.'),
  kids('kids-mon-black', 'Monday', '6:00 PM', 'Black', ['black'], 'Black belt kids train for one hour with advanced curriculum and preparation.', '1 hour'),
  kids('kids-tue-black', 'Tuesday', '5:00 PM', 'Black', ['black'], 'Black belt kids train with advanced curriculum and preparation.'),
  kids('kids-wed-black', 'Wednesday', '4:00 PM', 'Black', ['black'], 'Black belt kids train with advanced curriculum and preparation.'),
  kids('kids-sat-black', 'Saturday', '10:30 AM', 'Black', ['black'], 'Black belt kids train with advanced curriculum and preparation.'),
  special('kids-tue-sparring', 'Tuesday', '4:00 PM', 'Sparring', 'Kids · current students', 'Current kids students', 'Sparring class. Gear is required to participate.'),
  special('kids-sat-sparring', 'Saturday', '9:45 AM', 'Sparring', 'Brown belts', 'Current kids students', 'Saturday sparring for Brown belt kids. Gear is required to participate.'),
  special('kids-fri-weapons', 'Friday', '4:00 PM', 'Weapons', 'Green & up', 'Current kids students', 'Weapons practice for eligible kids students in the Green belt group and above.'),
  special('kids-fri-mat', 'Friday', '5:00 PM', 'Mat Class', 'Kids · current students', 'Current kids students', 'Groundwork and grappling skills for current kids students.'),

  teensAdults('adult-tue-white-orange-am', 'Tuesday', '9:30 AM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for one hour.'),
  teensAdults('adult-tue-white-orange-pm', 'Tuesday', '7:00 PM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for one hour.'),
  teensAdults('adult-thu-white-orange-am', 'Thursday', '9:30 AM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for one hour.'),
  teensAdults('adult-thu-white-orange-pm', 'Thursday', '7:00 PM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for one hour.'),
  teensAdults('adult-fri-white-orange', 'Friday', '6:00 PM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for one hour.'),
  teensAdults('adult-sat-white-orange', 'Saturday', '9:00 AM', 'White / Gold / Orange', ['white-gold', 'orange'], 'Teens and adults in the White, Gold, and Orange belt groups train for 45 minutes.', '45 min'),
  teensAdults('adult-tue-green-up-am', 'Tuesday', '9:30 AM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for one hour.'),
  teensAdults('adult-tue-green-up-pm', 'Tuesday', '7:00 PM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for one hour.'),
  teensAdults('adult-thu-green-up-am', 'Thursday', '9:30 AM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for one hour.'),
  teensAdults('adult-thu-green-up-pm', 'Thursday', '7:00 PM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for one hour.'),
  teensAdults('adult-fri-green-up', 'Friday', '6:00 PM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for one hour.'),
  teensAdults('adult-sat-green-up', 'Saturday', '9:00 AM', 'Green belt & up', ['green-up'], 'Teens and adults in the Green belt group and above train for 45 minutes.', '45 min'),
  teensAdults('adult-mon-brown', 'Monday', '5:00 PM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-tue-brown-am', 'Tuesday', '9:30 AM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-tue-brown-pm', 'Tuesday', '7:00 PM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-thu-brown-am', 'Thursday', '9:30 AM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-thu-brown-pm', 'Thursday', '7:00 PM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-fri-brown', 'Friday', '6:00 PM', 'Brown', ['brown'], 'Brown belt teens and adults train for one hour.'),
  teensAdults('adult-sat-brown', 'Saturday', '9:00 AM', 'Brown', ['brown'], 'Brown belt teens and adults train for 45 minutes.', '45 min'),
  teensAdults('adult-mon-black', 'Monday', '6:00 PM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-tue-black-am', 'Tuesday', '9:30 AM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-tue-black-pm', 'Tuesday', '7:00 PM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-thu-black-am', 'Thursday', '9:30 AM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-thu-black-pm', 'Thursday', '7:00 PM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-fri-black', 'Friday', '6:00 PM', 'Black', ['black'], 'Black belt teens and adults train for one hour.'),
  teensAdults('adult-sat-black', 'Saturday', '9:00 AM', 'Black', ['black'], 'Black belt teens and adults train for 45 minutes.', '45 min'),
  special('adult-fri-mat', 'Friday', '5:00 PM', 'Mat Class', 'Mixed with kids', 'Teens/adults and kids · current students', 'Groundwork and grappling skills. This class is listed as mixed with kids.', '45 min'),
  special('adult-sat-sparring', 'Saturday', '9:45 AM', 'Sparring', 'Current students', 'Current teens and adults', 'Gear is required to participate. Students can start at Gold; Purple belts and above must spar to promote.', '45 min'),
  special('adult-wed-weapons', 'Wednesday', '6:00 PM', 'Weapons', 'Green & up', 'Current teens and adults', 'Weapons practice for teens and adults in the Green belt group and above.', '1 hour'),
  special('adult-mon-eskrima', 'Monday', '7:00 PM', 'Eskrima', 'Adult Eskrima', 'Adults · ages 16+', 'IS3 / Eskrima program for adults.', '1 hour'),
  special('adult-wed-eskrima', 'Wednesday', '7:00 PM', 'Eskrima', 'Adult Eskrima', 'Adults · ages 16+', 'IS3 / Eskrima program for adults.', '1 hour'),
  special('adult-fri-eskrima', 'Friday', '7:00 PM', 'Eskrima', 'Adult Eskrima', 'Adults · ages 16+', 'IS3 / Eskrima program for adults.', '1 hour'),
  special('adult-sat-testing', 'Saturday', '2:00 PM', 'Testing', 'Testing session', 'Students scheduled for testing', 'Testing is usually held on the last Saturday of the month. Check with the school before attending.')
];

export const scheduleDays: ScheduleDay[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
