export const site = {
  name: 'Task Karate School',
  shortName: 'Task Karate',
  location: 'La Crosse, Wisconsin',
  address: '1501 Saint Andrew Street, La Crosse, WI 54603',
  latitude: 43.833746,
  longitude: -91.235309,
  phoneDisplay: '(608) 781-TASK (8275)',
  phoneHref: '+16087818275',
  email: 'taskkarate@gmail.com',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=1501+Saint+Andrew+Street+La+Crosse+WI+54603',
  mapUrl: 'https://www.openstreetmap.org/?mlat=43.833746&mlon=-91.235309#map=17/43.833746/-91.235309',
  facebook: 'https://www.facebook.com/Task-Karate-School-La-Crosse-Wisconsin-181603011868491',
  youtube: 'https://www.youtube.com/user/taskkarate',
  // FormSubmit keeps this static site deployable on GitHub Pages while delivering
  // new inquiries to the school's inbox. The first submission may require the
  // inbox owner to confirm the delivery address with the provider.
  contactFormAction: 'https://formsubmit.co/taskkarate@gmail.com',
  contactFormNext: 'https://taskkarateschool.com/contact/?sent=1#contact-form',
  // Replace at deploy time if the portal uses another hostname.
  portalUrl: import.meta.env.PUBLIC_PORTAL_URL || 'https://portal.taskkarateschool.com/'
};

export const navigation = [
  { label: 'Programs', href: '/programs/' },
  { label: 'Schedule', href: '/schedule/' },
  { label: 'About', href: '/about/' },
  { label: 'Students', href: '/students/' },
  { label: 'News', href: '/news/' },
  { label: 'Contact', href: '/contact/' }
];
