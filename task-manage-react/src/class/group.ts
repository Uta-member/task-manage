export type GroupIdType = number;

export class GroupId {
  value: GroupIdType;

  constructor(groupId: GroupIdType) {
    this.value = groupId;
  }
}

export type GroupNameType = string;

export class GroupName {
  value: GroupNameType;

  constructor(groupName: GroupNameType) {
    this.value = groupName;
  }
}
