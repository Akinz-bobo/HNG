"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const data = {
    slack_name: "Adeyemo Akinola",
    current_day: weekday[new Date().getDay()],
    utc_time: new Date().toISOString(),
    track: "backend",
    github_file_url: "https://github.com/Akinz-bobo/HNG/blob/task-one/src/index",
    github_repo_url: "https://github.com/Akinz-bobo/HNG",
};
exports.default = data;
