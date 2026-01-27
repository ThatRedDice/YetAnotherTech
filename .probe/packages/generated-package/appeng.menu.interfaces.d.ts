declare module "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$PacketWritable$$Interface} from "appeng.menu.guisync.PacketWritable"
import {$List} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Record} from "java.lang.Record"

export class $KeyTypeSelectionMenu$SyncedKeyTypes extends $Record implements $PacketWritable$$Interface {
constructor()
constructor(keyTypes: $Map$$Type<($AEKeyType$$Type), (boolean)>)
constructor(arg0: $RegistryFriendlyByteBuf$$Type)

public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "keyTypes"(): $Map<($AEKeyType), (boolean)>
public "enabledSet"(): $List<($AEKeyType)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionMenu$SyncedKeyTypes$$Type = ({"keyTypes"?: $Map$$Type<($AEKeyType$$Type), (boolean)>}) | ([keyTypes?: $Map$$Type<($AEKeyType$$Type), (boolean)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyTypeSelectionMenu$SyncedKeyTypes$$Original = $KeyTypeSelectionMenu$SyncedKeyTypes;}
declare module "appeng.menu.interfaces.KeyTypeSelectionMenu" {
import {$KeyTypeSelection} from "appeng.api.util.KeyTypeSelection"
import {$KeyTypeSelectionMenu$SyncedKeyTypes} from "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes"
import {$AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"

export interface $KeyTypeSelectionMenu$$Interface {
get "serverKeyTypeSelection"(): $KeyTypeSelection
get "clientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
}

export class $KeyTypeSelectionMenu implements $KeyTypeSelectionMenu$$Interface {
 "getServerKeyTypeSelection"(): $KeyTypeSelection
 "getClientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
 "selectKeyType"(arg0: $AEKeyType$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionMenu$$Type = ($KeyTypeSelectionMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyTypeSelectionMenu$$Original = $KeyTypeSelectionMenu;}
