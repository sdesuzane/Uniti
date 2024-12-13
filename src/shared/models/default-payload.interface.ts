export interface DefaultStudentPayload {
name: string | null;
registration: number | null;
schoolClassIds: number[] | null;
cpf: string | null;
email: string | null;
}


export function createDefaultStudentPayload(payload: Partial<DefaultStudentPayload> = {}): DefaultStudentPayload {
  return {
    name: payload.name ?? '',
    registration: payload.registration ?? 0,
    schoolClassIds: Array.isArray(payload.schoolClassIds)
      ? payload.schoolClassIds
      : (typeof payload.schoolClassIds === 'string' ? [Number(payload.schoolClassIds)] : []),
    cpf: payload.cpf ?? '',
    email: payload.email ?? '',
  };
}
