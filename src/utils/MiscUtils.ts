/**
 * カタカナをひらがなに変換する
 * @param K {string} - カタカナ
 */
export const convertK2H = (K: string) => String.fromCharCode(K.charCodeAt(0) - 0x60);

export type ReturnedType<T> = T extends ((...args: any[]) => infer U) ? (U extends Promise<infer R> ? R : U) : never;
