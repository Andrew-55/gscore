export type CodeType = {
  id: number;
  code: string;
  origin: string | null;
  status: string;
  subscribeId: number;
  userId: number;
};

export interface CodeTypeStore {
  codes: CodeType[];
}
