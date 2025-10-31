import { useState, useLayoutEffect } from "react";
import type { GetCollabedHelpComponentConfig } from "../helperTypes";

export const useOverlayHelper = (options: GetCollabedHelpComponentConfig) => {
  const [config, setConfig] = useState<any>();
  useLayoutEffect(() => {
    if (!options?.primary) return;

    if (!config) {
      const { containerPos, contentPos, content } = options.primary;

      const newConfig = {
        content,
        containerPos,
        contentPos,
        ...(options.secondary && {
          secondaryComponent: options.secondary,
        }),
      };

      setConfig(newConfig);
    }
  }, [options, config]);

  return config;
};
