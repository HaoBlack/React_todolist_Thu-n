// var randomID = require("random-id");
var randomid = require('randomid');

// Chú ý:
// membersID:
// Priority -->1: Cao, 2: Thấp, 3: Trung bình
const TasksData = [
  {
    id: randomid(5),
    name: "Soạn ReactJS",
    lableArr: ["Frontend", "Backend"],
    priority: 1,
    membersIDArr: ["user_2"],
    status: 2,
    description: "Phải soạn ReactJS kèm với NodeJS và Redux"
  },
  {
    id: randomid(5),
    name: "Dạy AngularJS",
    lableArr: ["Frontend", "API"],
    priority: 2,
    membersIDArr: ["user_4", "user_5"],
    status: 1,
    description: "Nỗi dung của Angular rất dài và khó"
  },
  {
    id: randomid(5),
    name: "Soạn Python",
    lableArr: ["Backend"],
    priority: 2,
    membersIDArr: ["user_3", "user_5"],
    status: 1,
    description: "Soạn Python phải tập trung vào game và giải quyết vấn đề"
  },
  {
    id: randomid(5),
    name: "Thi Hackathon",
    lableArr: ["Frontend", "Backend", "Issue"],
    priority: 3,
    membersIDArr: ["user_2", "user_3", "user_4", "user_5"],
    status: 3,
    description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
  }
]
export default TasksData;
