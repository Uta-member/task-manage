import { GroupId } from "../valueObject/groupId";
import { GroupName } from "../valueObject/groupName";

export class Group {
  readonly id: GroupId;
  readonly name: GroupName;

  constructor(id: GroupId, name: GroupName) {
    this.id = id;
    this.name = name;
  }
}
