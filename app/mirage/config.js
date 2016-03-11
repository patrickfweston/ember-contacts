export default function() {
  this.get('/contacts', function() {
    return {
      data: [{
        type: 'contacts',
        id: 1,
        attributes: {
          name: 'Patrick Weston',
          phone: '7402442738',
          email: 'patrickfweston@gmail.com',
        }
      }, {
        type: 'contacts',
        id: 2,
        attributes: {
          name: 'Randy Weston',
          phone: '6147789205',
          email: 'rweston@oapse.org',
        }
      }, {
        type: 'contacts',
        id: 3,
        attributes: {
          name: 'Katie Scovic',
          phone: '8474527860',
          email: 'katiescovic@u.northwestern.edu',
        }
      }]
    };
  });
}