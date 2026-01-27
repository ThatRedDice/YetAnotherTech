declare module "me.cominixo.betterf3.ducks.ChunkBuilderAccess" {
import {$Queue} from "java.util.Queue"
import {$Runnable} from "java.lang.Runnable"

export interface $ChunkBuilderAccess$$Interface {
}

export class $ChunkBuilderAccess implements $ChunkBuilderAccess$$Interface {
 "betterF3$getQueuedTaskCount"(): integer
 "betterF3$getUploadQueue"(): $Queue<($Runnable)>
 "betterF3$getBufferCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBuilderAccess$$Type = ($ChunkBuilderAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkBuilderAccess$$Original = $ChunkBuilderAccess;}
