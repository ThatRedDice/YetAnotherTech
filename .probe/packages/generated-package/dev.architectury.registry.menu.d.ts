declare module "dev.architectury.registry.menu.ExtendedMenuProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $ExtendedMenuProvider$$Interface extends $MenuProvider$$Interface {
get "displayName"(): $Component
}

export class $ExtendedMenuProvider implements $ExtendedMenuProvider$$Interface {
 "saveExtraData"(arg0: $FriendlyByteBuf$$Type): void
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedMenuProvider$$Type = ($ExtendedMenuProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedMenuProvider$$Original = $ExtendedMenuProvider;}
