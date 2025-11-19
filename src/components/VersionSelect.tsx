import React, { useEffect, useState } from "react";

type Version = {
  id: string;
  label: string;
  url: string;
};

interface VersionSelectProps {
  /** Optional: explicitly tell the component which version this instance is */
  currentId?: string;
}

export const VersionSelect: React.FC<VersionSelectProps> = ({ currentId }) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const [selectedUrl, setSelectedUrl] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        // Adjust the path if your app lives somewhere else
        const res = await fetch("/beequeen/versions.json", {
          cache: "no-cache",
        });
        if (!res.ok) throw new Error("Failed to load versions.json");

        const data: Version[] = await res.json();
        setVersions(data);

        // Determine which option should be selected initially
        let initialUrl = "";

        if (currentId) {
          const match = data.find((v) => v.id === currentId);
          initialUrl = match?.url ?? data[0]?.url ?? "";
        } else {
          // Try to infer from the current URL path
          const origin = window.location.origin;
          const currentPath = window.location.pathname;

          const match = data.find((v) => {
            const vPath = new URL(v.url, origin).pathname;
            return currentPath.startsWith(vPath);
          });

          initialUrl = match?.url ?? data[0]?.url ?? "";
        }

        setSelectedUrl(initialUrl);
      } catch (err) {
        console.error("Error loading versions:", err);
      }
    };

    load();
  }, [currentId]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const url = e.target.value;
    setSelectedUrl(url);
    if (url) {
      window.location.href = url;
    }
  };

  if (!versions.length) {
    // You can render null or some placeholder while loading
    return null;
  }

  return (
    <select
      id="version-select"
      className="ml-2 rounded border px-2 py-1 text-sm dark:bg-gray-800 dark:text-white"
      value={selectedUrl}
      onChange={handleChange}
    >
      {versions.map((v) => (
        <option key={v.id} value={v.url}>
          {v.label}
        </option>
      ))}
    </select>
  );
};