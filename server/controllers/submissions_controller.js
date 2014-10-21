Meteor.publish('submissions', function(user, lesson_id){
	return submissions_model.get_submissions_by_lesson_id(user, lesson_id);
});

SubmissionsController = function(){
	var _this = SubmissionsController;
	
	_this.prototype.set_answers = function(lesson_id, user_id, answers){
		// TODO
	};
	
	_this.prototype.set_scores = function(lesson_id, user_id, scores){
		// TODO
	};
};

submissions_controller = new SubmissionsController();

Meteor.methods({
	set_answers: function(lesson_id, user_id, answers){
		submissions_controller.set_answers(lesson_id, user_id, answers);
	},
	
	set_scores: function(lesson_id, user_id, scores){
		submissions_controller.set_scores(lesson_id, user_id, scores);
	}
});
