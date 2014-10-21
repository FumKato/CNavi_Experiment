QuestionsController = function(){
	var _this = QuestionsController;
	
	_this.prototype.set_questions = function(lesson_id, user_id, questions, answers){
		// Default: Do nothing
	};
};

questions_controller = new QuestionsController();

Meteor.methods({
	set_questions: function(lesson_id, user_id, questions, answers){
		questions_controller.set_questions(lesson_id, user_id, questions, answers);
	}
});

Meteor.publish('questions', function(user, lesson_id){
	var questions = questions_model.get_questions_by_lesson_id(user, lesson_id);
	return questions;
});