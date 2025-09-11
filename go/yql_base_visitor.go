// Code generated from YQL.g4 by ANTLR 4.13.1. DO NOT EDIT.

package yql_antlr4_parser // YQL
import "github.com/antlr4-go/antlr/v4"


type BaseYQLVisitor struct {
	*antlr.BaseParseTreeVisitor
}

func (v *BaseYQLVisitor) VisitSql_query(ctx *Sql_queryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSql_stmt_list(ctx *Sql_stmt_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAnsi_sql_stmt_list(ctx *Ansi_sql_stmt_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLambda_body(ctx *Lambda_bodyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLambda_stmt(ctx *Lambda_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSql_stmt(ctx *Sql_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSql_stmt_core(ctx *Sql_stmt_coreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExpr(ctx *ExprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOr_subexpr(ctx *Or_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAnd_subexpr(ctx *And_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitXor_subexpr(ctx *Xor_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDistinct_from_op(ctx *Distinct_from_opContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCond_expr(ctx *Cond_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitMatch_op(ctx *Match_opContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitEq_subexpr(ctx *Eq_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitShift_right(ctx *Shift_rightContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRot_right(ctx *Rot_rightContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDouble_question(ctx *Double_questionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNeq_subexpr(ctx *Neq_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBit_subexpr(ctx *Bit_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAdd_subexpr(ctx *Add_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitMul_subexpr(ctx *Mul_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCon_subexpr(ctx *Con_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUnary_op(ctx *Unary_opContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUnary_subexpr_suffix(ctx *Unary_subexpr_suffixContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUnary_casual_subexpr(ctx *Unary_casual_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIn_unary_casual_subexpr(ctx *In_unary_casual_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUnary_subexpr(ctx *Unary_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIn_unary_subexpr(ctx *In_unary_subexprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitList_literal(ctx *List_literalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExpr_dict_list(ctx *Expr_dict_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDict_literal(ctx *Dict_literalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExpr_struct_list(ctx *Expr_struct_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitStruct_literal(ctx *Struct_literalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAtom_expr(ctx *Atom_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIn_atom_expr(ctx *In_atom_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCast_expr(ctx *Cast_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBitcast_expr(ctx *Bitcast_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExists_expr(ctx *Exists_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCase_expr(ctx *Case_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLambda(ctx *LambdaContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIn_expr(ctx *In_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_api_expr(ctx *Json_api_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJsonpath_spec(ctx *Jsonpath_specContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_variable_name(ctx *Json_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_variable(ctx *Json_variableContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_variables(ctx *Json_variablesContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_common_args(ctx *Json_common_argsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_case_handler(ctx *Json_case_handlerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_value(ctx *Json_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_exists_handler(ctx *Json_exists_handlerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_exists(ctx *Json_existsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_query_wrapper(ctx *Json_query_wrapperContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_query_handler(ctx *Json_query_handlerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJson_query(ctx *Json_queryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSmart_parenthesis(ctx *Smart_parenthesisContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExpr_list(ctx *Expr_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPure_column_list(ctx *Pure_column_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPure_column_or_named(ctx *Pure_column_or_namedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPure_column_or_named_list(ctx *Pure_column_or_named_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitColumn_name(ctx *Column_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWithout_column_name(ctx *Without_column_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitColumn_list(ctx *Column_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWithout_column_list(ctx *Without_column_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_expr(ctx *Named_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_expr_list(ctx *Named_expr_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInvoke_expr(ctx *Invoke_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInvoke_expr_tail(ctx *Invoke_expr_tailContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUsing_call_expr(ctx *Using_call_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKey_expr(ctx *Key_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWhen_expr(ctx *When_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLiteral_value(ctx *Literal_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBind_parameter(ctx *Bind_parameterContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOpt_bind_parameter(ctx *Opt_bind_parameterContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBind_parameter_list(ctx *Bind_parameter_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_bind_parameter(ctx *Named_bind_parameterContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_bind_parameter_list(ctx *Named_bind_parameter_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSigned_number(ctx *Signed_numberContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_simple(ctx *Type_name_simpleContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInteger_or_bind(ctx *Integer_or_bindContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_tag(ctx *Type_name_tagContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitStruct_arg(ctx *Struct_argContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitStruct_arg_positional(ctx *Struct_arg_positionalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitVariant_arg(ctx *Variant_argContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCallable_arg(ctx *Callable_argContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCallable_arg_list(ctx *Callable_arg_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_decimal(ctx *Type_name_decimalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_optional(ctx *Type_name_optionalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_tuple(ctx *Type_name_tupleContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_struct(ctx *Type_name_structContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_variant(ctx *Type_name_variantContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_list(ctx *Type_name_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_stream(ctx *Type_name_streamContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_flow(ctx *Type_name_flowContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_dict(ctx *Type_name_dictContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_set(ctx *Type_name_setContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_enum(ctx *Type_name_enumContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_resource(ctx *Type_name_resourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_tagged(ctx *Type_name_taggedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_callable(ctx *Type_name_callableContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_composite(ctx *Type_name_compositeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name(ctx *Type_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_name_or_bind(ctx *Type_name_or_bindContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValue_constructor_literal(ctx *Value_constructor_literalContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValue_constructor(ctx *Value_constructorContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDeclare_stmt(ctx *Declare_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitModule_path(ctx *Module_pathContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitImport_stmt(ctx *Import_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExport_stmt(ctx *Export_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCall_action(ctx *Call_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInline_action(ctx *Inline_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDo_stmt(ctx *Do_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPragma_stmt(ctx *Pragma_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPragma_value(ctx *Pragma_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSort_specification(ctx *Sort_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSort_specification_list(ctx *Sort_specification_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_stmt(ctx *Select_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_unparenthesized_stmt(ctx *Select_unparenthesized_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_kind_parenthesis(ctx *Select_kind_parenthesisContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_op(ctx *Select_opContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_kind_partial(ctx *Select_kind_partialContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_kind(ctx *Select_kindContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitProcess_core(ctx *Process_coreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExternal_call_param(ctx *External_call_paramContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExternal_call_settings(ctx *External_call_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReduce_core(ctx *Reduce_coreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOpt_set_quantifier(ctx *Opt_set_quantifierContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSelect_core(ctx *Select_coreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_recognition_clause(ctx *Row_pattern_recognition_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_rows_per_match(ctx *Row_pattern_rows_per_matchContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_empty_match_handling(ctx *Row_pattern_empty_match_handlingContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_measures(ctx *Row_pattern_measuresContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_measure_list(ctx *Row_pattern_measure_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_measure_definition(ctx *Row_pattern_measure_definitionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_common_syntax(ctx *Row_pattern_common_syntaxContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_skip_to(ctx *Row_pattern_skip_toContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_skip_to_variable_name(ctx *Row_pattern_skip_to_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_initial_or_seek(ctx *Row_pattern_initial_or_seekContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern(ctx *Row_patternContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_term(ctx *Row_pattern_termContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_factor(ctx *Row_pattern_factorContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_quantifier(ctx *Row_pattern_quantifierContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_primary(ctx *Row_pattern_primaryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_primary_variable_name(ctx *Row_pattern_primary_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_permute(ctx *Row_pattern_permuteContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_clause(ctx *Row_pattern_subset_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_list(ctx *Row_pattern_subset_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_item(ctx *Row_pattern_subset_itemContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_item_variable_name(ctx *Row_pattern_subset_item_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_rhs(ctx *Row_pattern_subset_rhsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_subset_rhs_variable_name(ctx *Row_pattern_subset_rhs_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_definition_list(ctx *Row_pattern_definition_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_definition(ctx *Row_pattern_definitionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_definition_variable_name(ctx *Row_pattern_definition_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_definition_search_condition(ctx *Row_pattern_definition_search_conditionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSearch_condition(ctx *Search_conditionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRow_pattern_variable_name(ctx *Row_pattern_variable_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOrder_by_clause(ctx *Order_by_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExt_order_by_clause(ctx *Ext_order_by_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGroup_by_clause(ctx *Group_by_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGrouping_element_list(ctx *Grouping_element_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGrouping_element(ctx *Grouping_elementContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOrdinary_grouping_set(ctx *Ordinary_grouping_setContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOrdinary_grouping_set_list(ctx *Ordinary_grouping_set_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRollup_list(ctx *Rollup_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCube_list(ctx *Cube_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGrouping_sets_specification(ctx *Grouping_sets_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitHopping_window_specification(ctx *Hopping_window_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitResult_column(ctx *Result_columnContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJoin_source(ctx *Join_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_column(ctx *Named_columnContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFlatten_by_arg(ctx *Flatten_by_argContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFlatten_source(ctx *Flatten_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_single_source(ctx *Named_single_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSingle_source(ctx *Single_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSample_clause(ctx *Sample_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTablesample_clause(ctx *Tablesample_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSampling_mode(ctx *Sampling_modeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRepeatable_clause(ctx *Repeatable_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJoin_op(ctx *Join_opContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitJoin_constraint(ctx *Join_constraintContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReturning_columns_list(ctx *Returning_columns_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInto_table_stmt(ctx *Into_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInto_values_source(ctx *Into_values_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValues_stmt(ctx *Values_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValues_source(ctx *Values_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValues_source_row_list(ctx *Values_source_row_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitValues_source_row(ctx *Values_source_rowContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSimple_values_source(ctx *Simple_values_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_external_data_source_stmt(ctx *Create_external_data_source_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_external_data_source_stmt(ctx *Alter_external_data_source_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_external_data_source_action(ctx *Alter_external_data_source_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_external_data_source_stmt(ctx *Drop_external_data_source_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_view_stmt(ctx *Create_view_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_view_stmt(ctx *Drop_view_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUpsert_object_stmt(ctx *Upsert_object_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_object_stmt(ctx *Create_object_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_object_features(ctx *Create_object_featuresContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_object_stmt(ctx *Alter_object_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_object_features(ctx *Alter_object_featuresContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_object_stmt(ctx *Drop_object_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_object_features(ctx *Drop_object_featuresContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_feature_value(ctx *Object_feature_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_feature_kv(ctx *Object_feature_kvContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_feature_flag(ctx *Object_feature_flagContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_feature(ctx *Object_featureContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_features(ctx *Object_featuresContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_type_ref(ctx *Object_type_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_table_stmt(ctx *Create_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_table_entry(ctx *Create_table_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_backup_collection_stmt(ctx *Create_backup_collection_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_backup_collection_stmt(ctx *Alter_backup_collection_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_backup_collection_stmt(ctx *Drop_backup_collection_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_backup_collection_entries(ctx *Create_backup_collection_entriesContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_backup_collection_entries_many(ctx *Create_backup_collection_entries_manyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_list(ctx *Table_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_backup_collection_actions(ctx *Alter_backup_collection_actionsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_backup_collection_action(ctx *Alter_backup_collection_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_backup_collection_entries(ctx *Alter_backup_collection_entriesContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_backup_collection_entry(ctx *Alter_backup_collection_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBackup_collection(ctx *Backup_collectionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBackup_collection_settings(ctx *Backup_collection_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBackup_collection_settings_entry(ctx *Backup_collection_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBackup_stmt(ctx *Backup_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRestore_stmt(ctx *Restore_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_database_stmt(ctx *Alter_database_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_inherits(ctx *Table_inheritsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_partition_by(ctx *Table_partition_byContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWith_table_settings(ctx *With_table_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_tablestore(ctx *Table_tablestoreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_settings_entry(ctx *Table_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_as_source(ctx *Table_as_sourceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_stmt(ctx *Alter_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_action(ctx *Alter_table_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_external_table_stmt(ctx *Alter_external_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_external_table_action(ctx *Alter_external_table_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_store_stmt(ctx *Alter_table_store_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_store_action(ctx *Alter_table_store_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_add_column(ctx *Alter_table_add_columnContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_drop_column(ctx *Alter_table_drop_columnContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_column(ctx *Alter_table_alter_columnContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_column_drop_not_null(ctx *Alter_table_alter_column_drop_not_nullContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_add_column_family(ctx *Alter_table_add_column_familyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_column_family(ctx *Alter_table_alter_column_familyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_set_table_setting_uncompat(ctx *Alter_table_set_table_setting_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_set_table_setting_compat(ctx *Alter_table_set_table_setting_compatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_reset_table_setting(ctx *Alter_table_reset_table_settingContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_add_index(ctx *Alter_table_add_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_drop_index(ctx *Alter_table_drop_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_rename_to(ctx *Alter_table_rename_toContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_rename_index_to(ctx *Alter_table_rename_index_toContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_add_changefeed(ctx *Alter_table_add_changefeedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_changefeed(ctx *Alter_table_alter_changefeedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_drop_changefeed(ctx *Alter_table_drop_changefeedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_index(ctx *Alter_table_alter_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitColumn_schema(ctx *Column_schemaContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFamily_relation(ctx *Family_relationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOpt_column_constraints(ctx *Opt_column_constraintsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitColumn_order_by_specification(ctx *Column_order_by_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_constraint(ctx *Table_constraintContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_index(ctx *Table_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_index_type(ctx *Table_index_typeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGlobal_index(ctx *Global_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLocal_index(ctx *Local_indexContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIndex_subtype(ctx *Index_subtypeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWith_index_settings(ctx *With_index_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIndex_setting_entry(ctx *Index_setting_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIndex_setting_value(ctx *Index_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitChangefeed(ctx *ChangefeedContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitChangefeed_settings(ctx *Changefeed_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitChangefeed_settings_entry(ctx *Changefeed_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitChangefeed_setting_value(ctx *Changefeed_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitChangefeed_alter_settings(ctx *Changefeed_alter_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_setting_entry(ctx *Alter_table_setting_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_setting_value(ctx *Table_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTtl_tier_list(ctx *Ttl_tier_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTtl_tier_action(ctx *Ttl_tier_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFamily_entry(ctx *Family_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFamily_settings(ctx *Family_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFamily_settings_entry(ctx *Family_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFamily_setting_value(ctx *Family_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSplit_boundaries(ctx *Split_boundariesContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLiteral_value_list(ctx *Literal_value_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_table_alter_index_action(ctx *Alter_table_alter_index_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_table_stmt(ctx *Drop_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_user_stmt(ctx *Create_user_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_user_stmt(ctx *Alter_user_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_group_stmt(ctx *Create_group_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_group_stmt(ctx *Alter_group_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_role_stmt(ctx *Drop_role_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRole_name(ctx *Role_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUser_option(ctx *User_optionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAuthentication_option(ctx *Authentication_optionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPassword_option(ctx *Password_optionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPassword_value(ctx *Password_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitHash_option(ctx *Hash_optionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLogin_option(ctx *Login_optionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitGrant_permissions_stmt(ctx *Grant_permissions_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRevoke_permissions_stmt(ctx *Revoke_permissions_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPermission_id(ctx *Permission_idContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPermission_name(ctx *Permission_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitPermission_name_target(ctx *Permission_name_targetContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_resource_pool_stmt(ctx *Create_resource_pool_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_resource_pool_stmt(ctx *Alter_resource_pool_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_resource_pool_action(ctx *Alter_resource_pool_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_resource_pool_stmt(ctx *Drop_resource_pool_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_resource_pool_classifier_stmt(ctx *Create_resource_pool_classifier_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_resource_pool_classifier_stmt(ctx *Alter_resource_pool_classifier_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_resource_pool_classifier_action(ctx *Alter_resource_pool_classifier_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_resource_pool_classifier_stmt(ctx *Drop_resource_pool_classifier_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_replication_stmt(ctx *Create_replication_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReplication_target(ctx *Replication_targetContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReplication_settings(ctx *Replication_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReplication_settings_entry(ctx *Replication_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_replication_stmt(ctx *Alter_replication_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_replication_action(ctx *Alter_replication_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_replication_set_setting(ctx *Alter_replication_set_settingContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_replication_stmt(ctx *Drop_replication_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitLambda_or_parameter(ctx *Lambda_or_parameterContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_transfer_stmt(ctx *Create_transfer_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTransfer_settings(ctx *Transfer_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTransfer_settings_entry(ctx *Transfer_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_transfer_stmt(ctx *Alter_transfer_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_transfer_action(ctx *Alter_transfer_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_transfer_set_setting(ctx *Alter_transfer_set_settingContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_transfer_set_using(ctx *Alter_transfer_set_usingContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_transfer_stmt(ctx *Drop_transfer_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAction_or_subquery_args(ctx *Action_or_subquery_argsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDefine_action_or_subquery_stmt(ctx *Define_action_or_subquery_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDefine_action_or_subquery_body(ctx *Define_action_or_subquery_bodyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIf_stmt(ctx *If_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFor_stmt(ctx *For_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_ref(ctx *Table_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_key(ctx *Table_keyContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_arg(ctx *Table_argContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_hints(ctx *Table_hintsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTable_hint(ctx *Table_hintContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitObject_ref(ctx *Object_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSimple_table_ref_core(ctx *Simple_table_ref_coreContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSimple_table_ref(ctx *Simple_table_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInto_simple_table_ref(ctx *Into_simple_table_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDelete_stmt(ctx *Delete_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUpdate_stmt(ctx *Update_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSet_clause_choice(ctx *Set_clause_choiceContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSet_clause_list(ctx *Set_clause_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSet_clause(ctx *Set_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSet_target(ctx *Set_targetContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitMultiple_column_assignment(ctx *Multiple_column_assignmentContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSet_target_list(ctx *Set_target_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_topic_stmt(ctx *Create_topic_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_topic_entries(ctx *Create_topic_entriesContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCreate_topic_entry(ctx *Create_topic_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWith_topic_settings(ctx *With_topic_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_stmt(ctx *Alter_topic_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_action(ctx *Alter_topic_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_add_consumer(ctx *Alter_topic_add_consumerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_create_consumer_entry(ctx *Topic_create_consumer_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_alter_consumer(ctx *Alter_topic_alter_consumerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_alter_consumer_entry(ctx *Alter_topic_alter_consumer_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_drop_consumer(ctx *Alter_topic_drop_consumerContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_alter_consumer_set(ctx *Topic_alter_consumer_setContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_alter_consumer_reset(ctx *Topic_alter_consumer_resetContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_set_settings(ctx *Alter_topic_set_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_topic_reset_settings(ctx *Alter_topic_reset_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitDrop_topic_stmt(ctx *Drop_topic_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_settings(ctx *Topic_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_settings_entry(ctx *Topic_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_setting_value(ctx *Topic_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_consumer_with_settings(ctx *Topic_consumer_with_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_consumer_settings(ctx *Topic_consumer_settingsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_consumer_settings_entry(ctx *Topic_consumer_settings_entryContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_consumer_setting_value(ctx *Topic_consumer_setting_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_ref(ctx *Topic_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitTopic_consumer_ref(ctx *Topic_consumer_refContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNull_treatment(ctx *Null_treatmentContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitFilter_clause(ctx *Filter_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_name_or_specification(ctx *Window_name_or_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_name(ctx *Window_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_clause(ctx *Window_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_definition_list(ctx *Window_definition_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_definition(ctx *Window_definitionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNew_window_name(ctx *New_window_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_specification(ctx *Window_specificationContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_specification_details(ctx *Window_specification_detailsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitExisting_window_name(ctx *Existing_window_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_partition_clause(ctx *Window_partition_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_order_clause(ctx *Window_order_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_clause(ctx *Window_frame_clauseContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_units(ctx *Window_frame_unitsContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_extent(ctx *Window_frame_extentContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_between(ctx *Window_frame_betweenContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_bound(ctx *Window_frame_boundContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitWindow_frame_exclusion(ctx *Window_frame_exclusionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitUse_stmt(ctx *Use_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitSubselect_stmt(ctx *Subselect_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitNamed_nodes_stmt(ctx *Named_nodes_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCommit_stmt(ctx *Commit_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitRollback_stmt(ctx *Rollback_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAnalyze_table(ctx *Analyze_tableContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAnalyze_table_list(ctx *Analyze_table_listContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAnalyze_stmt(ctx *Analyze_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_sequence_stmt(ctx *Alter_sequence_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAlter_sequence_action(ctx *Alter_sequence_actionContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitShow_create_table_stmt(ctx *Show_create_table_stmtContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitIdentifier(ctx *IdentifierContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId(ctx *IdContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_schema(ctx *Id_schemaContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_expr(ctx *Id_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_expr_in(ctx *Id_expr_inContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_window(ctx *Id_windowContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_table(ctx *Id_tableContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_without(ctx *Id_withoutContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_hint(ctx *Id_hintContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_as_compat(ctx *Id_as_compatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id(ctx *An_idContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_or_type(ctx *An_id_or_typeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_schema(ctx *An_id_schemaContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_expr(ctx *An_id_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_expr_in(ctx *An_id_expr_inContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_window(ctx *An_id_windowContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_table(ctx *An_id_tableContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_without(ctx *An_id_withoutContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_hint(ctx *An_id_hintContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_pure(ctx *An_id_pureContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitAn_id_as_compat(ctx *An_id_as_compatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitView_name(ctx *View_nameContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOpt_id_prefix(ctx *Opt_id_prefixContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitCluster_expr(ctx *Cluster_exprContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_or_type(ctx *Id_or_typeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitOpt_id_prefix_or_type(ctx *Opt_id_prefix_or_typeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_or_at(ctx *Id_or_atContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_table_or_type(ctx *Id_table_or_typeContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitId_table_or_at(ctx *Id_table_or_atContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword(ctx *KeywordContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_expr_uncompat(ctx *Keyword_expr_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_table_uncompat(ctx *Keyword_table_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_select_uncompat(ctx *Keyword_select_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_alter_uncompat(ctx *Keyword_alter_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_in_uncompat(ctx *Keyword_in_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_window_uncompat(ctx *Keyword_window_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_hint_uncompat(ctx *Keyword_hint_uncompatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_as_compat(ctx *Keyword_as_compatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitKeyword_compat(ctx *Keyword_compatContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitType_id(ctx *Type_idContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitBool_value(ctx *Bool_valueContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitReal(ctx *RealContext) interface{} {
	return v.VisitChildren(ctx)
}

func (v *BaseYQLVisitor) VisitInteger(ctx *IntegerContext) interface{} {
	return v.VisitChildren(ctx)
}
