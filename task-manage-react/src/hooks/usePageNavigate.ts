import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ページ移動の関数を返すカスタムフック
 * @returns
 */
export const usePageNavigate = () => {
  const navigate = useNavigate();

  /**
   * ページを移動する関数
   */
  const pageNavigate = useCallback(
    (reqPath: string) => {
      const path = reqPath.length > 0 ? reqPath : "/";
      navigate(path);
    },
    [navigate]
  );

  /**
   * ページを移動するハンドラ用関数
   */
  const handlePageNavigate = useCallback(
    (reqPath: string) => () => {
      pageNavigate(reqPath);
    },
    [pageNavigate]
  );

  return { pageNavigate, handlePageNavigate };
};
