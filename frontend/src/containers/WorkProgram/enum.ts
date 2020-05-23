export enum fields {
    WORK_PROGRAM_ID = 'FETCHING',
    WORK_PROGRAM = 'WORK_PROGRAM',
    WORK_PROGRAM_TITLE = 'title',
    WORK_PROGRAM_CODE = 'discipline_code',
    WORK_PROGRAM_QUALIFICATION = 'qualification',
    WORK_PROGRAM_SECTIONS = 'discipline_sections',
}

export enum workProgramSectionFields {
    ORDINAL_NUMBER = 'ordinal_number',
    NAME = 'name',
    SPO = 'SRO',
    CONTACT_WORK = 'contact_work',
    LECTURE_CLASSES = 'lecture_classes',
    PRACTICAL_LESSONS = 'practical_lessons',
    LABORATORY = 'laboratory',
    TOTAL_HOURS = 'total_hours',
    TOPICS = 'topics',
}

export enum workProgramTopicFields {
    DESCRIPTION = 'description',
    NUMBER = 'number'
}

export enum fetchingTypes {
    GET_WORK_PROGRAM = 'GET_WORK_PROGRAM',
    SAVE_SECTION = 'SAVE_SECTION',
    DELETE_SECTION = 'DELETE_SECTION',
    CHANGE_SECTION_NUMBER = 'CHANGE_SECTION_NUMBER',
    SAVE_TOPIC = 'SAVE_TOPIC',
    DELETE_TOPIC = 'DELETE_TOPIC',
    CHANGE_TOPIC_NUMBER = 'CHANGE_TOPIC_NUMBER',
}