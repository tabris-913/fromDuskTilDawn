/**
 * カタカナをひらがなに変換する
 * @param K {string} - カタカナ
 */
export const convertK2H = (K: string) => String.fromCharCode(K.charCodeAt(0) - 0x60);
