"use client";
import { settingApi } from "@/redux/features/settingApiSlice/settingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(settingApi.endpoints.getSetting.initiate(undefined));
  }, [dispatch]);

  const { app_name, company_website, favicon_url } =
    useAppSelector((state) => state["setting-slice"]) || {};

  return (
    <>
      <title>{app_name}</title>
      <link
        rel="icon"
        href={
          favicon_url ||
          `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${company_website}&size=64`
        }
      />
      {children}
    </>
  );
}
