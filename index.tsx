/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { Icons, Menu } from "@webpack/common";

export default definePlugin({
    name: "CopyFolderId",
    description: "Adds an option to copy folder ids. This isnt used that much, but when you need it its really annoying to get.",
    authors: [Devs.sadan],

    contextMenus: {
        "guild-context"(arr, { folderId }: { folderId?: number }) {
            if(!folderId) return;

            arr.push((<Menu.MenuItem
                id="vc-copyFolderId"
                label="Copy Folder ID"
                icon={Icons.IdIcon}
            />));
        }
    }
});

