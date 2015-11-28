DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('mymeetups');
  }
});

DashboardController.helpers({
  'mymeetups': function(){
    return Meetups.find({user: Meteor.userId()});
  }
});



DashboardController.events({
 'submit .update-meetup-form': function(event){
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


        var id = event.target.id.value;

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

            updatedAt: new Date()
        }

            //       name: name,
            // phoneNumber: phoneNumber,
            // address: address,
            // country: country,
            // city: city,
            // zipcode: zipcode,
            // datevisit: datevisit,
            // numWeeksPreggo: numWeeksPreggo,
            // familyPhoneNumber: familyPhoneNumber,
            // updatedAt: new Date()

        // Insert Meetup
        Meteor.call('updateMeetup', id, params);

        toastr.success('Meetup Updated');
        $('#modal'+id).modal('hide');
        Router.go('/dashboard');

        return false;
  },
  'click .remove-meetup': function(event){
     if (confirm("Are you sure?")) {
            // Delete Meetup
            Meteor.call("removeMeetup", event.currentTarget.id);
            toastr.success('Meetup Removed');
            return false;
        }
        return false;
  }
});
