declare module "mcjty.rftoolsbase.tools.GenericModuleItem" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"
import {$IModuleGuiBuilder$$Type} from "mcjty.rftoolsbase.api.screens.IModuleGuiBuilder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ITooltipSettings$$Interface} from "mcjty.lib.tooltips.ITooltipSettings"
import {$IClientScreenModule} from "mcjty.rftoolsbase.api.screens.IClientScreenModule"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IScreenModule} from "mcjty.rftoolsbase.api.screens.IScreenModule"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IModuleProvider$$Interface} from "mcjty.rftoolsbase.api.screens.IModuleProvider"

export class $GenericModuleItem extends $Item implements $IModuleProvider$$Interface, $ITooltipSettings$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isPlusModule"(): boolean
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IScreenModule<(never), (never)>)>
public "createClientScreenModule"(): $IClientScreenModule<(never)>
public "createServerScreenModule"(): $IScreenModule<(never), (never)>
public "componentType"(): $DataComponentType<($IScreenModule<(never), (never)>)>
public "getModuleName"(): StringJS
public "codec"(): $Codec<($IScreenModule<(never), (never)>)>
public "createGui"(arg0: $IModuleGuiBuilder$$Type): void
public "getMaxWidth"(): integer
public "getManualEntry"(): $ManualEntry
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "plusModule"(): boolean
get "moduleName"(): StringJS
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericModuleItem$$Type = ($GenericModuleItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericModuleItem$$Original = $GenericModuleItem;}
