import {DataClient, decodeDataBlock, type DataBlock} from "@photino-net-utils/bridge";

/** The host's data plane: binary list blocks and raw files. */
export const data = new DataClient({baseMessage: "app.data"});

export {decodeDataBlock as decodeBlock};
export type {DataBlock};
