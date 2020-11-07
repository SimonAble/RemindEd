select * from Courses c
left join Lectures l on c.CourseID = l.CourseID
left join Topics t on t.LectureID = l.LectureID
left join Questions q on q.TopicId = t.TopicId
left join QuestionsOptions qo on qo.QuestionId = q.QuestionId
--where c.CourseID = 25