MeetupsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('meetups');
  },
  data: {
    meetups: Meetups.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Meetups');
  }
});

MeetupsController.events({
  'submit .add-meetup-form': function(event){
        var name = event.target.name.value;
        var age = event.target.age.value;
        var phoneNumber = event.target.phoneNumber.value;
        var address = event.target.address.value;
        var country = event.target.country.value;
        var city = event.target.city.value;
        var zipcode = event.target.zipcode.value;
        var datevisit = event.target.datevisit.value;
        var numWeeksPreggo = event.target.numWeeksPreggo.value;
        var familyPhoneNumber = event.target.familyPhoneNumber.value;



        var params = {
        	name: name,
            age: age,
            phoneNumber: phoneNumber,
            address: address,
            country: country,
            city: city,
            zipcode: zipcode,
            datevisit: datevisit,
            numWeeksPreggo: numWeeksPreggo,
            familyPhoneNumber: familyPhoneNumber,

            user: Meteor.userId(),
            username: Meteor.user().username,
            createdAt: new Date()
        }


        //         var params = {
        //   name: name,
        //     phoneNumber: phoneNumber,
        //     address: address,
        //     country: country,
        //     city: city,
        //     zipcode: zipcode,
        //     datevisit: datevisit,
        //     numWeeksPreggo: numWeeksPreggo,
        //     familyPhoneNumber: familyPhoneNumber,
        //     user: Meteor.userId(),
        //     username: Meteor.user().username,
        //     createdAt: new Date()
        // }

        // Insert Meetup
        Meteor.call('addMeetup', params);

        toastr.success('Meetup Added');
        Router.go('/meetups');

        return false;
  }
});
