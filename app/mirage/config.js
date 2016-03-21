export default function() {
  this.get('/contacts', function() {
    return {
      data: [{
        type: 'contacts',
        id: 1,
        attributes: {
          name: 'Patrick Weston',
          phone: '8318675309',
          email: 'patrick@testemail.com',
        }
      }, {
        type: 'contacts',
        id: 2,
        attributes: {
          name: 'Randy Weston',
          phone: '8318675309',
          email: 'randy@testemail.com',
        }
      }, {
        type: 'contacts',
        id: 3,
        attributes: {
          name: 'Katie Scovic',
          phone: '8318675309',
          email: 'katie@testemail.com',
        }
      }]
    };
  });
}
