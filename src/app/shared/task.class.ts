export class Task{
	id:number;
	status_id:number;
	title:string;
	description:string;

	static statusList = [
			{   "id" : "todo",
			    "name" : "TO DO"
			},
			{   "id" : "im_progress",
			    "name" : "IN PROGRESS"
			},
			{   "id" : "done",
			    "name" : "DONE"
			},
	];

	constructor(title,description, id =null, status_id = null){
		this.title = title
		this.status_id = 0
		this.description = description

		if(id)
			this.id = id
		if(status)
			this.status_id = status_id
	}

	getStatus(){
		return Task.statusList[this.status_id].name;
	}

	getStatusId(){
		return Task.statusList[this.status_id].id;
	}

	setStatus(id:string){
		this.status_id = Task.statusList.findIndex(st => st.id == id)
	}

}