declare module "mcjty.lib.builder.TooltipBuilder" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InfoLine, $InfoLine$$Type} from "mcjty.lib.builder.InfoLine"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Function$$Type} from "java.util.function.Function"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Stream$$Type} from "java.util.stream.Stream"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TooltipBuilder {
constructor()

public static "gold"(arg0: $Predicate$$Type<($ItemStack)>): $InfoLine
public static "gold"(): $InfoLine
public "makeTooltip"(arg0: $ResourceLocation$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "infoShift"(...arg0: ($InfoLine$$Type)[]): $TooltipBuilder
public "infoAdvanced"(...arg0: ($InfoLine$$Type)[]): $TooltipBuilder
public static "repeatingParameter"(arg0: StringJS, arg1: $Function$$Type<($ItemStack), ($Stream$$Type<(StringJS)>)>): $InfoLine
public static "warning"(arg0: $Predicate$$Type<($ItemStack)>): $InfoLine
public static "warning"(): $InfoLine
public static "header"(): $InfoLine
public static "general"(arg0: StringJS, arg1: $Predicate$$Type<($ItemStack)>, ...arg2: ($ChatFormatting$$Type)[]): $InfoLine
public static "general"(arg0: StringJS, ...arg1: ($ChatFormatting$$Type)[]): $InfoLine
public "info"(...arg0: ($InfoLine$$Type)[]): $TooltipBuilder
public static "key"(arg0: StringJS): $InfoLine
public static "parameter"(arg0: StringJS, arg1: $Predicate$$Type<($ItemStack)>, arg2: $Function$$Type<($ItemStack), (StringJS)>): $InfoLine
public static "parameter"(arg0: StringJS, arg1: $Function$$Type<($ItemStack), (StringJS)>): $InfoLine
public "isActive"(): boolean
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipBuilder$$Type = ($TooltipBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipBuilder$$Original = $TooltipBuilder;}
declare module "mcjty.lib.builder.BlockBuilder" {
import {$ManualEntry, $ManualEntry$$Type} from "mcjty.lib.gui.ManualEntry"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$InfoLine$$Type} from "mcjty.lib.builder.InfoLine"
import {$TOPDriver, $TOPDriver$$Type} from "mcjty.lib.compat.theoneprobe.TOPDriver"
import {$TooltipBuilder} from "mcjty.lib.builder.TooltipBuilder"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BlockBuilder {
static readonly "STANDARD_IRON": $BlockBehaviour$Properties

constructor()

public "infusable"(): $BlockBuilder
public "getManualEntry"(): $ManualEntry
public "infoShift"(...arg0: ($InfoLine$$Type)[]): $BlockBuilder
public "tileEntitySupplier"(arg0: $BlockEntityType$BlockEntitySupplier$$Type<($BlockEntity$$Type)>): $BlockBuilder
public "isInfusable"(): boolean
public "getTileEntitySupplier"(): $BlockEntityType$BlockEntitySupplier<($BlockEntity)>
public "getTooltipBuilder"(): $TooltipBuilder
public "getTopDriver"(): $TOPDriver
public "topDriver"(arg0: $TOPDriver$$Type): $BlockBuilder
public "manualEntry"(arg0: $ManualEntry$$Type): $BlockBuilder
public "infoAdvanced"(...arg0: ($InfoLine$$Type)[]): $BlockBuilder
public "info"(...arg0: ($InfoLine$$Type)[]): $BlockBuilder
public "getProperties"(): $BlockBehaviour$Properties
public "properties"(arg0: $BlockBehaviour$Properties$$Type): $BlockBuilder
get "tooltipBuilder"(): $TooltipBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$$Type = ($BlockBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBuilder$$Original = $BlockBuilder;}
declare module "mcjty.lib.builder.InfoLine" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record} from "java.lang.Record"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $InfoLine extends $Record {
constructor(translationKey: StringJS, suffix: StringJS, condition: $Predicate$$Type<($ItemStack)>, informationGetter: $Function$$Type<($ItemStack), (StringJS)>, styles: ($ChatFormatting$$Type)[], repeatingParameter: $Function$$Type<($ItemStack), ($Stream$$Type<(StringJS)>)>)

public "repeatingParameter"(): $Function<($ItemStack), ($Stream<(StringJS)>)>
public "informationGetter"(): $Function<($ItemStack), (StringJS)>
public "styles"(): ($ChatFormatting)[]
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "suffix"(): StringJS
public "condition"(): $Predicate<($ItemStack)>
public "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoLine$$Type = ({"repeatingParameter"?: $Function$$Type<($ItemStack$$Type), ($Stream$$Type<(StringJS)>)>, "informationGetter"?: $Function$$Type<($ItemStack$$Type), (StringJS)>, "translationKey"?: StringJS, "condition"?: $Predicate$$Type<($ItemStack$$Type)>, "styles"?: ($ChatFormatting$$Type)[], "suffix"?: StringJS}) | ([repeatingParameter?: $Function$$Type<($ItemStack$$Type), ($Stream$$Type<(StringJS)>)>, informationGetter?: $Function$$Type<($ItemStack$$Type), (StringJS)>, translationKey?: StringJS, condition?: $Predicate$$Type<($ItemStack$$Type)>, styles?: ($ChatFormatting$$Type)[], suffix?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfoLine$$Original = $InfoLine;}
