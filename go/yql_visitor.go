// Code generated from YQL.g4 by ANTLR 4.13.1. DO NOT EDIT.

package yql_antlr4_parser // YQL
import "github.com/antlr4-go/antlr/v4"


// A complete Visitor for a parse tree produced by YQLParser.
type YQLVisitor interface {
	antlr.ParseTreeVisitor

	// Visit a parse tree produced by YQLParser#sql_query.
	VisitSql_query(ctx *Sql_queryContext) interface{}

	// Visit a parse tree produced by YQLParser#sql_stmt_list.
	VisitSql_stmt_list(ctx *Sql_stmt_listContext) interface{}

	// Visit a parse tree produced by YQLParser#ansi_sql_stmt_list.
	VisitAnsi_sql_stmt_list(ctx *Ansi_sql_stmt_listContext) interface{}

	// Visit a parse tree produced by YQLParser#lambda_body.
	VisitLambda_body(ctx *Lambda_bodyContext) interface{}

	// Visit a parse tree produced by YQLParser#lambda_stmt.
	VisitLambda_stmt(ctx *Lambda_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#sql_stmt.
	VisitSql_stmt(ctx *Sql_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#sql_stmt_core.
	VisitSql_stmt_core(ctx *Sql_stmt_coreContext) interface{}

	// Visit a parse tree produced by YQLParser#expr.
	VisitExpr(ctx *ExprContext) interface{}

	// Visit a parse tree produced by YQLParser#or_subexpr.
	VisitOr_subexpr(ctx *Or_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#and_subexpr.
	VisitAnd_subexpr(ctx *And_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#xor_subexpr.
	VisitXor_subexpr(ctx *Xor_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#distinct_from_op.
	VisitDistinct_from_op(ctx *Distinct_from_opContext) interface{}

	// Visit a parse tree produced by YQLParser#cond_expr.
	VisitCond_expr(ctx *Cond_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#match_op.
	VisitMatch_op(ctx *Match_opContext) interface{}

	// Visit a parse tree produced by YQLParser#eq_subexpr.
	VisitEq_subexpr(ctx *Eq_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#shift_right.
	VisitShift_right(ctx *Shift_rightContext) interface{}

	// Visit a parse tree produced by YQLParser#rot_right.
	VisitRot_right(ctx *Rot_rightContext) interface{}

	// Visit a parse tree produced by YQLParser#double_question.
	VisitDouble_question(ctx *Double_questionContext) interface{}

	// Visit a parse tree produced by YQLParser#neq_subexpr.
	VisitNeq_subexpr(ctx *Neq_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#bit_subexpr.
	VisitBit_subexpr(ctx *Bit_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#add_subexpr.
	VisitAdd_subexpr(ctx *Add_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#mul_subexpr.
	VisitMul_subexpr(ctx *Mul_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#con_subexpr.
	VisitCon_subexpr(ctx *Con_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#unary_op.
	VisitUnary_op(ctx *Unary_opContext) interface{}

	// Visit a parse tree produced by YQLParser#unary_subexpr_suffix.
	VisitUnary_subexpr_suffix(ctx *Unary_subexpr_suffixContext) interface{}

	// Visit a parse tree produced by YQLParser#unary_casual_subexpr.
	VisitUnary_casual_subexpr(ctx *Unary_casual_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#in_unary_casual_subexpr.
	VisitIn_unary_casual_subexpr(ctx *In_unary_casual_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#unary_subexpr.
	VisitUnary_subexpr(ctx *Unary_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#in_unary_subexpr.
	VisitIn_unary_subexpr(ctx *In_unary_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#list_literal.
	VisitList_literal(ctx *List_literalContext) interface{}

	// Visit a parse tree produced by YQLParser#expr_dict_list.
	VisitExpr_dict_list(ctx *Expr_dict_listContext) interface{}

	// Visit a parse tree produced by YQLParser#dict_literal.
	VisitDict_literal(ctx *Dict_literalContext) interface{}

	// Visit a parse tree produced by YQLParser#expr_struct_list.
	VisitExpr_struct_list(ctx *Expr_struct_listContext) interface{}

	// Visit a parse tree produced by YQLParser#struct_literal.
	VisitStruct_literal(ctx *Struct_literalContext) interface{}

	// Visit a parse tree produced by YQLParser#atom_expr.
	VisitAtom_expr(ctx *Atom_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#in_atom_expr.
	VisitIn_atom_expr(ctx *In_atom_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#cast_expr.
	VisitCast_expr(ctx *Cast_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#bitcast_expr.
	VisitBitcast_expr(ctx *Bitcast_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#exists_expr.
	VisitExists_expr(ctx *Exists_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#case_expr.
	VisitCase_expr(ctx *Case_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#lambda.
	VisitLambda(ctx *LambdaContext) interface{}

	// Visit a parse tree produced by YQLParser#in_expr.
	VisitIn_expr(ctx *In_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#json_api_expr.
	VisitJson_api_expr(ctx *Json_api_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#jsonpath_spec.
	VisitJsonpath_spec(ctx *Jsonpath_specContext) interface{}

	// Visit a parse tree produced by YQLParser#json_variable_name.
	VisitJson_variable_name(ctx *Json_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#json_variable.
	VisitJson_variable(ctx *Json_variableContext) interface{}

	// Visit a parse tree produced by YQLParser#json_variables.
	VisitJson_variables(ctx *Json_variablesContext) interface{}

	// Visit a parse tree produced by YQLParser#json_common_args.
	VisitJson_common_args(ctx *Json_common_argsContext) interface{}

	// Visit a parse tree produced by YQLParser#json_case_handler.
	VisitJson_case_handler(ctx *Json_case_handlerContext) interface{}

	// Visit a parse tree produced by YQLParser#json_value.
	VisitJson_value(ctx *Json_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#json_exists_handler.
	VisitJson_exists_handler(ctx *Json_exists_handlerContext) interface{}

	// Visit a parse tree produced by YQLParser#json_exists.
	VisitJson_exists(ctx *Json_existsContext) interface{}

	// Visit a parse tree produced by YQLParser#json_query_wrapper.
	VisitJson_query_wrapper(ctx *Json_query_wrapperContext) interface{}

	// Visit a parse tree produced by YQLParser#json_query_handler.
	VisitJson_query_handler(ctx *Json_query_handlerContext) interface{}

	// Visit a parse tree produced by YQLParser#json_query.
	VisitJson_query(ctx *Json_queryContext) interface{}

	// Visit a parse tree produced by YQLParser#select_subexpr.
	VisitSelect_subexpr(ctx *Select_subexprContext) interface{}

	// Visit a parse tree produced by YQLParser#select_subexpr_intersect.
	VisitSelect_subexpr_intersect(ctx *Select_subexpr_intersectContext) interface{}

	// Visit a parse tree produced by YQLParser#select_or_expr.
	VisitSelect_or_expr(ctx *Select_or_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#tuple_or_expr.
	VisitTuple_or_expr(ctx *Tuple_or_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#smart_parenthesis.
	VisitSmart_parenthesis(ctx *Smart_parenthesisContext) interface{}

	// Visit a parse tree produced by YQLParser#expr_list.
	VisitExpr_list(ctx *Expr_listContext) interface{}

	// Visit a parse tree produced by YQLParser#pure_column_list.
	VisitPure_column_list(ctx *Pure_column_listContext) interface{}

	// Visit a parse tree produced by YQLParser#pure_column_or_named.
	VisitPure_column_or_named(ctx *Pure_column_or_namedContext) interface{}

	// Visit a parse tree produced by YQLParser#pure_column_or_named_list.
	VisitPure_column_or_named_list(ctx *Pure_column_or_named_listContext) interface{}

	// Visit a parse tree produced by YQLParser#column_name.
	VisitColumn_name(ctx *Column_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#without_column_name.
	VisitWithout_column_name(ctx *Without_column_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#column_list.
	VisitColumn_list(ctx *Column_listContext) interface{}

	// Visit a parse tree produced by YQLParser#without_column_list.
	VisitWithout_column_list(ctx *Without_column_listContext) interface{}

	// Visit a parse tree produced by YQLParser#named_expr.
	VisitNamed_expr(ctx *Named_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#named_expr_list.
	VisitNamed_expr_list(ctx *Named_expr_listContext) interface{}

	// Visit a parse tree produced by YQLParser#invoke_expr.
	VisitInvoke_expr(ctx *Invoke_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#invoke_expr_tail.
	VisitInvoke_expr_tail(ctx *Invoke_expr_tailContext) interface{}

	// Visit a parse tree produced by YQLParser#using_call_expr.
	VisitUsing_call_expr(ctx *Using_call_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#key_expr.
	VisitKey_expr(ctx *Key_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#when_expr.
	VisitWhen_expr(ctx *When_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#literal_value.
	VisitLiteral_value(ctx *Literal_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#bind_parameter.
	VisitBind_parameter(ctx *Bind_parameterContext) interface{}

	// Visit a parse tree produced by YQLParser#opt_bind_parameter.
	VisitOpt_bind_parameter(ctx *Opt_bind_parameterContext) interface{}

	// Visit a parse tree produced by YQLParser#bind_parameter_list.
	VisitBind_parameter_list(ctx *Bind_parameter_listContext) interface{}

	// Visit a parse tree produced by YQLParser#named_bind_parameter.
	VisitNamed_bind_parameter(ctx *Named_bind_parameterContext) interface{}

	// Visit a parse tree produced by YQLParser#named_bind_parameter_list.
	VisitNamed_bind_parameter_list(ctx *Named_bind_parameter_listContext) interface{}

	// Visit a parse tree produced by YQLParser#signed_number.
	VisitSigned_number(ctx *Signed_numberContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_simple.
	VisitType_name_simple(ctx *Type_name_simpleContext) interface{}

	// Visit a parse tree produced by YQLParser#integer_or_bind.
	VisitInteger_or_bind(ctx *Integer_or_bindContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_tag.
	VisitType_name_tag(ctx *Type_name_tagContext) interface{}

	// Visit a parse tree produced by YQLParser#struct_arg.
	VisitStruct_arg(ctx *Struct_argContext) interface{}

	// Visit a parse tree produced by YQLParser#struct_arg_positional.
	VisitStruct_arg_positional(ctx *Struct_arg_positionalContext) interface{}

	// Visit a parse tree produced by YQLParser#variant_arg.
	VisitVariant_arg(ctx *Variant_argContext) interface{}

	// Visit a parse tree produced by YQLParser#callable_arg.
	VisitCallable_arg(ctx *Callable_argContext) interface{}

	// Visit a parse tree produced by YQLParser#callable_arg_list.
	VisitCallable_arg_list(ctx *Callable_arg_listContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_decimal.
	VisitType_name_decimal(ctx *Type_name_decimalContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_optional.
	VisitType_name_optional(ctx *Type_name_optionalContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_tuple.
	VisitType_name_tuple(ctx *Type_name_tupleContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_struct.
	VisitType_name_struct(ctx *Type_name_structContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_variant.
	VisitType_name_variant(ctx *Type_name_variantContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_list.
	VisitType_name_list(ctx *Type_name_listContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_stream.
	VisitType_name_stream(ctx *Type_name_streamContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_flow.
	VisitType_name_flow(ctx *Type_name_flowContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_dict.
	VisitType_name_dict(ctx *Type_name_dictContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_set.
	VisitType_name_set(ctx *Type_name_setContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_enum.
	VisitType_name_enum(ctx *Type_name_enumContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_resource.
	VisitType_name_resource(ctx *Type_name_resourceContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_tagged.
	VisitType_name_tagged(ctx *Type_name_taggedContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_callable.
	VisitType_name_callable(ctx *Type_name_callableContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_linear.
	VisitType_name_linear(ctx *Type_name_linearContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_dynamiclinear.
	VisitType_name_dynamiclinear(ctx *Type_name_dynamiclinearContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_composite.
	VisitType_name_composite(ctx *Type_name_compositeContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name.
	VisitType_name(ctx *Type_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#type_name_or_bind.
	VisitType_name_or_bind(ctx *Type_name_or_bindContext) interface{}

	// Visit a parse tree produced by YQLParser#value_constructor_literal.
	VisitValue_constructor_literal(ctx *Value_constructor_literalContext) interface{}

	// Visit a parse tree produced by YQLParser#value_constructor.
	VisitValue_constructor(ctx *Value_constructorContext) interface{}

	// Visit a parse tree produced by YQLParser#declare_stmt.
	VisitDeclare_stmt(ctx *Declare_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#module_path.
	VisitModule_path(ctx *Module_pathContext) interface{}

	// Visit a parse tree produced by YQLParser#import_stmt.
	VisitImport_stmt(ctx *Import_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#export_stmt.
	VisitExport_stmt(ctx *Export_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#call_action.
	VisitCall_action(ctx *Call_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#inline_action.
	VisitInline_action(ctx *Inline_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#do_stmt.
	VisitDo_stmt(ctx *Do_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#pragma_stmt.
	VisitPragma_stmt(ctx *Pragma_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#pragma_value.
	VisitPragma_value(ctx *Pragma_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#sort_specification.
	VisitSort_specification(ctx *Sort_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#sort_specification_list.
	VisitSort_specification_list(ctx *Sort_specification_listContext) interface{}

	// Visit a parse tree produced by YQLParser#select_stmt.
	VisitSelect_stmt(ctx *Select_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#select_stmt_intersect.
	VisitSelect_stmt_intersect(ctx *Select_stmt_intersectContext) interface{}

	// Visit a parse tree produced by YQLParser#select_unparenthesized_stmt.
	VisitSelect_unparenthesized_stmt(ctx *Select_unparenthesized_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#select_unparenthesized_stmt_intersect.
	VisitSelect_unparenthesized_stmt_intersect(ctx *Select_unparenthesized_stmt_intersectContext) interface{}

	// Visit a parse tree produced by YQLParser#select_kind_parenthesis.
	VisitSelect_kind_parenthesis(ctx *Select_kind_parenthesisContext) interface{}

	// Visit a parse tree produced by YQLParser#union_op.
	VisitUnion_op(ctx *Union_opContext) interface{}

	// Visit a parse tree produced by YQLParser#intersect_op.
	VisitIntersect_op(ctx *Intersect_opContext) interface{}

	// Visit a parse tree produced by YQLParser#select_kind_partial.
	VisitSelect_kind_partial(ctx *Select_kind_partialContext) interface{}

	// Visit a parse tree produced by YQLParser#select_kind.
	VisitSelect_kind(ctx *Select_kindContext) interface{}

	// Visit a parse tree produced by YQLParser#process_core.
	VisitProcess_core(ctx *Process_coreContext) interface{}

	// Visit a parse tree produced by YQLParser#external_call_param.
	VisitExternal_call_param(ctx *External_call_paramContext) interface{}

	// Visit a parse tree produced by YQLParser#external_call_settings.
	VisitExternal_call_settings(ctx *External_call_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#reduce_core.
	VisitReduce_core(ctx *Reduce_coreContext) interface{}

	// Visit a parse tree produced by YQLParser#opt_set_quantifier.
	VisitOpt_set_quantifier(ctx *Opt_set_quantifierContext) interface{}

	// Visit a parse tree produced by YQLParser#select_core.
	VisitSelect_core(ctx *Select_coreContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_recognition_clause.
	VisitRow_pattern_recognition_clause(ctx *Row_pattern_recognition_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_rows_per_match.
	VisitRow_pattern_rows_per_match(ctx *Row_pattern_rows_per_matchContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_empty_match_handling.
	VisitRow_pattern_empty_match_handling(ctx *Row_pattern_empty_match_handlingContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_measures.
	VisitRow_pattern_measures(ctx *Row_pattern_measuresContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_measure_list.
	VisitRow_pattern_measure_list(ctx *Row_pattern_measure_listContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_measure_definition.
	VisitRow_pattern_measure_definition(ctx *Row_pattern_measure_definitionContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_common_syntax.
	VisitRow_pattern_common_syntax(ctx *Row_pattern_common_syntaxContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_skip_to.
	VisitRow_pattern_skip_to(ctx *Row_pattern_skip_toContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_skip_to_variable_name.
	VisitRow_pattern_skip_to_variable_name(ctx *Row_pattern_skip_to_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_initial_or_seek.
	VisitRow_pattern_initial_or_seek(ctx *Row_pattern_initial_or_seekContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern.
	VisitRow_pattern(ctx *Row_patternContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_term.
	VisitRow_pattern_term(ctx *Row_pattern_termContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_factor.
	VisitRow_pattern_factor(ctx *Row_pattern_factorContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_quantifier.
	VisitRow_pattern_quantifier(ctx *Row_pattern_quantifierContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_primary.
	VisitRow_pattern_primary(ctx *Row_pattern_primaryContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_primary_variable_name.
	VisitRow_pattern_primary_variable_name(ctx *Row_pattern_primary_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_permute.
	VisitRow_pattern_permute(ctx *Row_pattern_permuteContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_clause.
	VisitRow_pattern_subset_clause(ctx *Row_pattern_subset_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_list.
	VisitRow_pattern_subset_list(ctx *Row_pattern_subset_listContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_item.
	VisitRow_pattern_subset_item(ctx *Row_pattern_subset_itemContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_item_variable_name.
	VisitRow_pattern_subset_item_variable_name(ctx *Row_pattern_subset_item_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_rhs.
	VisitRow_pattern_subset_rhs(ctx *Row_pattern_subset_rhsContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_subset_rhs_variable_name.
	VisitRow_pattern_subset_rhs_variable_name(ctx *Row_pattern_subset_rhs_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_definition_list.
	VisitRow_pattern_definition_list(ctx *Row_pattern_definition_listContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_definition.
	VisitRow_pattern_definition(ctx *Row_pattern_definitionContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_definition_variable_name.
	VisitRow_pattern_definition_variable_name(ctx *Row_pattern_definition_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_definition_search_condition.
	VisitRow_pattern_definition_search_condition(ctx *Row_pattern_definition_search_conditionContext) interface{}

	// Visit a parse tree produced by YQLParser#search_condition.
	VisitSearch_condition(ctx *Search_conditionContext) interface{}

	// Visit a parse tree produced by YQLParser#row_pattern_variable_name.
	VisitRow_pattern_variable_name(ctx *Row_pattern_variable_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#order_by_clause.
	VisitOrder_by_clause(ctx *Order_by_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#ext_order_by_clause.
	VisitExt_order_by_clause(ctx *Ext_order_by_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#group_by_clause.
	VisitGroup_by_clause(ctx *Group_by_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#grouping_element_list.
	VisitGrouping_element_list(ctx *Grouping_element_listContext) interface{}

	// Visit a parse tree produced by YQLParser#grouping_element.
	VisitGrouping_element(ctx *Grouping_elementContext) interface{}

	// Visit a parse tree produced by YQLParser#ordinary_grouping_set.
	VisitOrdinary_grouping_set(ctx *Ordinary_grouping_setContext) interface{}

	// Visit a parse tree produced by YQLParser#ordinary_grouping_set_list.
	VisitOrdinary_grouping_set_list(ctx *Ordinary_grouping_set_listContext) interface{}

	// Visit a parse tree produced by YQLParser#rollup_list.
	VisitRollup_list(ctx *Rollup_listContext) interface{}

	// Visit a parse tree produced by YQLParser#cube_list.
	VisitCube_list(ctx *Cube_listContext) interface{}

	// Visit a parse tree produced by YQLParser#grouping_sets_specification.
	VisitGrouping_sets_specification(ctx *Grouping_sets_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#hopping_window_specification.
	VisitHopping_window_specification(ctx *Hopping_window_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#result_column.
	VisitResult_column(ctx *Result_columnContext) interface{}

	// Visit a parse tree produced by YQLParser#join_source.
	VisitJoin_source(ctx *Join_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#named_column.
	VisitNamed_column(ctx *Named_columnContext) interface{}

	// Visit a parse tree produced by YQLParser#flatten_by_arg.
	VisitFlatten_by_arg(ctx *Flatten_by_argContext) interface{}

	// Visit a parse tree produced by YQLParser#flatten_source.
	VisitFlatten_source(ctx *Flatten_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#named_single_source.
	VisitNamed_single_source(ctx *Named_single_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#single_source.
	VisitSingle_source(ctx *Single_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#sample_clause.
	VisitSample_clause(ctx *Sample_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#tablesample_clause.
	VisitTablesample_clause(ctx *Tablesample_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#sampling_mode.
	VisitSampling_mode(ctx *Sampling_modeContext) interface{}

	// Visit a parse tree produced by YQLParser#repeatable_clause.
	VisitRepeatable_clause(ctx *Repeatable_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#join_op.
	VisitJoin_op(ctx *Join_opContext) interface{}

	// Visit a parse tree produced by YQLParser#join_constraint.
	VisitJoin_constraint(ctx *Join_constraintContext) interface{}

	// Visit a parse tree produced by YQLParser#returning_columns_list.
	VisitReturning_columns_list(ctx *Returning_columns_listContext) interface{}

	// Visit a parse tree produced by YQLParser#into_table_stmt.
	VisitInto_table_stmt(ctx *Into_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#into_values_source.
	VisitInto_values_source(ctx *Into_values_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#values_stmt.
	VisitValues_stmt(ctx *Values_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#values_source.
	VisitValues_source(ctx *Values_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#values_source_row_list.
	VisitValues_source_row_list(ctx *Values_source_row_listContext) interface{}

	// Visit a parse tree produced by YQLParser#values_source_row.
	VisitValues_source_row(ctx *Values_source_rowContext) interface{}

	// Visit a parse tree produced by YQLParser#create_external_data_source_stmt.
	VisitCreate_external_data_source_stmt(ctx *Create_external_data_source_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_external_data_source_stmt.
	VisitAlter_external_data_source_stmt(ctx *Alter_external_data_source_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_external_data_source_action.
	VisitAlter_external_data_source_action(ctx *Alter_external_data_source_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_external_data_source_stmt.
	VisitDrop_external_data_source_stmt(ctx *Drop_external_data_source_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_streaming_query_stmt.
	VisitCreate_streaming_query_stmt(ctx *Create_streaming_query_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_streaming_query_features.
	VisitCreate_streaming_query_features(ctx *Create_streaming_query_featuresContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_streaming_query_stmt.
	VisitAlter_streaming_query_stmt(ctx *Alter_streaming_query_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_streaming_query_action.
	VisitAlter_streaming_query_action(ctx *Alter_streaming_query_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_streaming_query_set_settings.
	VisitAlter_streaming_query_set_settings(ctx *Alter_streaming_query_set_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#streaming_query_settings.
	VisitStreaming_query_settings(ctx *Streaming_query_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#streaming_query_setting.
	VisitStreaming_query_setting(ctx *Streaming_query_settingContext) interface{}

	// Visit a parse tree produced by YQLParser#streaming_query_setting_value.
	VisitStreaming_query_setting_value(ctx *Streaming_query_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#streaming_query_definition.
	VisitStreaming_query_definition(ctx *Streaming_query_definitionContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_streaming_query_stmt.
	VisitDrop_streaming_query_stmt(ctx *Drop_streaming_query_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_view_stmt.
	VisitCreate_view_stmt(ctx *Create_view_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_view_stmt.
	VisitDrop_view_stmt(ctx *Drop_view_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#upsert_object_stmt.
	VisitUpsert_object_stmt(ctx *Upsert_object_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_object_stmt.
	VisitCreate_object_stmt(ctx *Create_object_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_object_features.
	VisitCreate_object_features(ctx *Create_object_featuresContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_object_stmt.
	VisitAlter_object_stmt(ctx *Alter_object_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_object_features.
	VisitAlter_object_features(ctx *Alter_object_featuresContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_object_stmt.
	VisitDrop_object_stmt(ctx *Drop_object_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_object_features.
	VisitDrop_object_features(ctx *Drop_object_featuresContext) interface{}

	// Visit a parse tree produced by YQLParser#object_feature_value.
	VisitObject_feature_value(ctx *Object_feature_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#object_feature_kv.
	VisitObject_feature_kv(ctx *Object_feature_kvContext) interface{}

	// Visit a parse tree produced by YQLParser#object_feature_flag.
	VisitObject_feature_flag(ctx *Object_feature_flagContext) interface{}

	// Visit a parse tree produced by YQLParser#object_feature.
	VisitObject_feature(ctx *Object_featureContext) interface{}

	// Visit a parse tree produced by YQLParser#object_features.
	VisitObject_features(ctx *Object_featuresContext) interface{}

	// Visit a parse tree produced by YQLParser#object_type_ref.
	VisitObject_type_ref(ctx *Object_type_refContext) interface{}

	// Visit a parse tree produced by YQLParser#create_table_stmt.
	VisitCreate_table_stmt(ctx *Create_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_table_entry.
	VisitCreate_table_entry(ctx *Create_table_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#create_backup_collection_stmt.
	VisitCreate_backup_collection_stmt(ctx *Create_backup_collection_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_backup_collection_stmt.
	VisitAlter_backup_collection_stmt(ctx *Alter_backup_collection_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_backup_collection_stmt.
	VisitDrop_backup_collection_stmt(ctx *Drop_backup_collection_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_backup_collection_entries.
	VisitCreate_backup_collection_entries(ctx *Create_backup_collection_entriesContext) interface{}

	// Visit a parse tree produced by YQLParser#create_backup_collection_entries_many.
	VisitCreate_backup_collection_entries_many(ctx *Create_backup_collection_entries_manyContext) interface{}

	// Visit a parse tree produced by YQLParser#table_list.
	VisitTable_list(ctx *Table_listContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_backup_collection_actions.
	VisitAlter_backup_collection_actions(ctx *Alter_backup_collection_actionsContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_backup_collection_action.
	VisitAlter_backup_collection_action(ctx *Alter_backup_collection_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_backup_collection_entries.
	VisitAlter_backup_collection_entries(ctx *Alter_backup_collection_entriesContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_backup_collection_entry.
	VisitAlter_backup_collection_entry(ctx *Alter_backup_collection_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#backup_collection.
	VisitBackup_collection(ctx *Backup_collectionContext) interface{}

	// Visit a parse tree produced by YQLParser#backup_collection_settings.
	VisitBackup_collection_settings(ctx *Backup_collection_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#backup_collection_settings_entry.
	VisitBackup_collection_settings_entry(ctx *Backup_collection_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#backup_stmt.
	VisitBackup_stmt(ctx *Backup_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#restore_stmt.
	VisitRestore_stmt(ctx *Restore_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_database_stmt.
	VisitAlter_database_stmt(ctx *Alter_database_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_database_action.
	VisitAlter_database_action(ctx *Alter_database_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#set_database_settings.
	VisitSet_database_settings(ctx *Set_database_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#database_settings.
	VisitDatabase_settings(ctx *Database_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#database_setting.
	VisitDatabase_setting(ctx *Database_settingContext) interface{}

	// Visit a parse tree produced by YQLParser#database_setting_value.
	VisitDatabase_setting_value(ctx *Database_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#truncate_table_stmt.
	VisitTruncate_table_stmt(ctx *Truncate_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#with_truncate_table_settings.
	VisitWith_truncate_table_settings(ctx *With_truncate_table_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#table_inherits.
	VisitTable_inherits(ctx *Table_inheritsContext) interface{}

	// Visit a parse tree produced by YQLParser#table_partition_by.
	VisitTable_partition_by(ctx *Table_partition_byContext) interface{}

	// Visit a parse tree produced by YQLParser#with_table_settings.
	VisitWith_table_settings(ctx *With_table_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#table_tablestore.
	VisitTable_tablestore(ctx *Table_tablestoreContext) interface{}

	// Visit a parse tree produced by YQLParser#table_settings_entry.
	VisitTable_settings_entry(ctx *Table_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#table_as_source.
	VisitTable_as_source(ctx *Table_as_sourceContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_stmt.
	VisitAlter_table_stmt(ctx *Alter_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_action.
	VisitAlter_table_action(ctx *Alter_table_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_external_table_stmt.
	VisitAlter_external_table_stmt(ctx *Alter_external_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_external_table_action.
	VisitAlter_external_table_action(ctx *Alter_external_table_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_store_stmt.
	VisitAlter_table_store_stmt(ctx *Alter_table_store_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_store_action.
	VisitAlter_table_store_action(ctx *Alter_table_store_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_add_column.
	VisitAlter_table_add_column(ctx *Alter_table_add_columnContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_drop_column.
	VisitAlter_table_drop_column(ctx *Alter_table_drop_columnContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_column.
	VisitAlter_table_alter_column(ctx *Alter_table_alter_columnContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_column_drop_not_null.
	VisitAlter_table_alter_column_drop_not_null(ctx *Alter_table_alter_column_drop_not_nullContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_column_set_not_null.
	VisitAlter_table_alter_column_set_not_null(ctx *Alter_table_alter_column_set_not_nullContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_column_set_compression.
	VisitAlter_table_alter_column_set_compression(ctx *Alter_table_alter_column_set_compressionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_add_column_family.
	VisitAlter_table_add_column_family(ctx *Alter_table_add_column_familyContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_column_family.
	VisitAlter_table_alter_column_family(ctx *Alter_table_alter_column_familyContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_set_table_setting_uncompat.
	VisitAlter_table_set_table_setting_uncompat(ctx *Alter_table_set_table_setting_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_set_table_setting_compat.
	VisitAlter_table_set_table_setting_compat(ctx *Alter_table_set_table_setting_compatContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_reset_table_setting.
	VisitAlter_table_reset_table_setting(ctx *Alter_table_reset_table_settingContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_add_index.
	VisitAlter_table_add_index(ctx *Alter_table_add_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_drop_index.
	VisitAlter_table_drop_index(ctx *Alter_table_drop_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_rename_to.
	VisitAlter_table_rename_to(ctx *Alter_table_rename_toContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_rename_index_to.
	VisitAlter_table_rename_index_to(ctx *Alter_table_rename_index_toContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_add_changefeed.
	VisitAlter_table_add_changefeed(ctx *Alter_table_add_changefeedContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_changefeed.
	VisitAlter_table_alter_changefeed(ctx *Alter_table_alter_changefeedContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_drop_changefeed.
	VisitAlter_table_drop_changefeed(ctx *Alter_table_drop_changefeedContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_index.
	VisitAlter_table_alter_index(ctx *Alter_table_alter_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#column_schema.
	VisitColumn_schema(ctx *Column_schemaContext) interface{}

	// Visit a parse tree produced by YQLParser#column_option_list.
	VisitColumn_option_list(ctx *Column_option_listContext) interface{}

	// Visit a parse tree produced by YQLParser#column_option_list_space.
	VisitColumn_option_list_space(ctx *Column_option_list_spaceContext) interface{}

	// Visit a parse tree produced by YQLParser#column_option_list_comma.
	VisitColumn_option_list_comma(ctx *Column_option_list_commaContext) interface{}

	// Visit a parse tree produced by YQLParser#column_option.
	VisitColumn_option(ctx *Column_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#compression.
	VisitCompression(ctx *CompressionContext) interface{}

	// Visit a parse tree produced by YQLParser#compression_setting_entry.
	VisitCompression_setting_entry(ctx *Compression_setting_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#compression_setting_value.
	VisitCompression_setting_value(ctx *Compression_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#family_relation.
	VisitFamily_relation(ctx *Family_relationContext) interface{}

	// Visit a parse tree produced by YQLParser#nullability.
	VisitNullability(ctx *NullabilityContext) interface{}

	// Visit a parse tree produced by YQLParser#default_value.
	VisitDefault_value(ctx *Default_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#column_order_by_specification.
	VisitColumn_order_by_specification(ctx *Column_order_by_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#table_constraint.
	VisitTable_constraint(ctx *Table_constraintContext) interface{}

	// Visit a parse tree produced by YQLParser#table_index.
	VisitTable_index(ctx *Table_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#table_index_type.
	VisitTable_index_type(ctx *Table_index_typeContext) interface{}

	// Visit a parse tree produced by YQLParser#global_index.
	VisitGlobal_index(ctx *Global_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#local_index.
	VisitLocal_index(ctx *Local_indexContext) interface{}

	// Visit a parse tree produced by YQLParser#index_subtype.
	VisitIndex_subtype(ctx *Index_subtypeContext) interface{}

	// Visit a parse tree produced by YQLParser#with_index_settings.
	VisitWith_index_settings(ctx *With_index_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#index_setting_entry.
	VisitIndex_setting_entry(ctx *Index_setting_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#index_setting_value.
	VisitIndex_setting_value(ctx *Index_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#changefeed.
	VisitChangefeed(ctx *ChangefeedContext) interface{}

	// Visit a parse tree produced by YQLParser#changefeed_settings.
	VisitChangefeed_settings(ctx *Changefeed_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#changefeed_settings_entry.
	VisitChangefeed_settings_entry(ctx *Changefeed_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#changefeed_setting_value.
	VisitChangefeed_setting_value(ctx *Changefeed_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#changefeed_alter_settings.
	VisitChangefeed_alter_settings(ctx *Changefeed_alter_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_setting_entry.
	VisitAlter_table_setting_entry(ctx *Alter_table_setting_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#table_setting_value.
	VisitTable_setting_value(ctx *Table_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#ttl_tier_list.
	VisitTtl_tier_list(ctx *Ttl_tier_listContext) interface{}

	// Visit a parse tree produced by YQLParser#ttl_tier_action.
	VisitTtl_tier_action(ctx *Ttl_tier_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#family_entry.
	VisitFamily_entry(ctx *Family_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#family_settings.
	VisitFamily_settings(ctx *Family_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#family_settings_entry.
	VisitFamily_settings_entry(ctx *Family_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#family_setting_value.
	VisitFamily_setting_value(ctx *Family_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#split_boundaries.
	VisitSplit_boundaries(ctx *Split_boundariesContext) interface{}

	// Visit a parse tree produced by YQLParser#literal_value_list.
	VisitLiteral_value_list(ctx *Literal_value_listContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_table_alter_index_action.
	VisitAlter_table_alter_index_action(ctx *Alter_table_alter_index_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_table_stmt.
	VisitDrop_table_stmt(ctx *Drop_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_user_stmt.
	VisitCreate_user_stmt(ctx *Create_user_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_user_stmt.
	VisitAlter_user_stmt(ctx *Alter_user_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_group_stmt.
	VisitCreate_group_stmt(ctx *Create_group_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_group_stmt.
	VisitAlter_group_stmt(ctx *Alter_group_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_role_stmt.
	VisitDrop_role_stmt(ctx *Drop_role_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#role_name.
	VisitRole_name(ctx *Role_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#user_option.
	VisitUser_option(ctx *User_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#authentication_option.
	VisitAuthentication_option(ctx *Authentication_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#password_option.
	VisitPassword_option(ctx *Password_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#password_value.
	VisitPassword_value(ctx *Password_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#hash_option.
	VisitHash_option(ctx *Hash_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#login_option.
	VisitLogin_option(ctx *Login_optionContext) interface{}

	// Visit a parse tree produced by YQLParser#grant_permissions_stmt.
	VisitGrant_permissions_stmt(ctx *Grant_permissions_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#revoke_permissions_stmt.
	VisitRevoke_permissions_stmt(ctx *Revoke_permissions_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#permission_id.
	VisitPermission_id(ctx *Permission_idContext) interface{}

	// Visit a parse tree produced by YQLParser#permission_name.
	VisitPermission_name(ctx *Permission_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#permission_name_target.
	VisitPermission_name_target(ctx *Permission_name_targetContext) interface{}

	// Visit a parse tree produced by YQLParser#create_resource_pool_stmt.
	VisitCreate_resource_pool_stmt(ctx *Create_resource_pool_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_resource_pool_stmt.
	VisitAlter_resource_pool_stmt(ctx *Alter_resource_pool_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_resource_pool_action.
	VisitAlter_resource_pool_action(ctx *Alter_resource_pool_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_resource_pool_stmt.
	VisitDrop_resource_pool_stmt(ctx *Drop_resource_pool_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_resource_pool_classifier_stmt.
	VisitCreate_resource_pool_classifier_stmt(ctx *Create_resource_pool_classifier_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_resource_pool_classifier_stmt.
	VisitAlter_resource_pool_classifier_stmt(ctx *Alter_resource_pool_classifier_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_resource_pool_classifier_action.
	VisitAlter_resource_pool_classifier_action(ctx *Alter_resource_pool_classifier_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_resource_pool_classifier_stmt.
	VisitDrop_resource_pool_classifier_stmt(ctx *Drop_resource_pool_classifier_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_replication_stmt.
	VisitCreate_replication_stmt(ctx *Create_replication_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#replication_target.
	VisitReplication_target(ctx *Replication_targetContext) interface{}

	// Visit a parse tree produced by YQLParser#replication_settings.
	VisitReplication_settings(ctx *Replication_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#replication_settings_entry.
	VisitReplication_settings_entry(ctx *Replication_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_replication_stmt.
	VisitAlter_replication_stmt(ctx *Alter_replication_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_replication_action.
	VisitAlter_replication_action(ctx *Alter_replication_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_replication_set_setting.
	VisitAlter_replication_set_setting(ctx *Alter_replication_set_settingContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_replication_stmt.
	VisitDrop_replication_stmt(ctx *Drop_replication_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#lambda_or_parameter.
	VisitLambda_or_parameter(ctx *Lambda_or_parameterContext) interface{}

	// Visit a parse tree produced by YQLParser#create_transfer_stmt.
	VisitCreate_transfer_stmt(ctx *Create_transfer_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#transfer_settings.
	VisitTransfer_settings(ctx *Transfer_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#transfer_settings_entry.
	VisitTransfer_settings_entry(ctx *Transfer_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_transfer_stmt.
	VisitAlter_transfer_stmt(ctx *Alter_transfer_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_transfer_action.
	VisitAlter_transfer_action(ctx *Alter_transfer_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_transfer_set_setting.
	VisitAlter_transfer_set_setting(ctx *Alter_transfer_set_settingContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_transfer_set_using.
	VisitAlter_transfer_set_using(ctx *Alter_transfer_set_usingContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_transfer_stmt.
	VisitDrop_transfer_stmt(ctx *Drop_transfer_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#action_or_subquery_args.
	VisitAction_or_subquery_args(ctx *Action_or_subquery_argsContext) interface{}

	// Visit a parse tree produced by YQLParser#define_action_or_subquery_stmt.
	VisitDefine_action_or_subquery_stmt(ctx *Define_action_or_subquery_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#define_action_or_subquery_body.
	VisitDefine_action_or_subquery_body(ctx *Define_action_or_subquery_bodyContext) interface{}

	// Visit a parse tree produced by YQLParser#if_stmt.
	VisitIf_stmt(ctx *If_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#for_stmt.
	VisitFor_stmt(ctx *For_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#table_ref.
	VisitTable_ref(ctx *Table_refContext) interface{}

	// Visit a parse tree produced by YQLParser#table_key.
	VisitTable_key(ctx *Table_keyContext) interface{}

	// Visit a parse tree produced by YQLParser#table_arg.
	VisitTable_arg(ctx *Table_argContext) interface{}

	// Visit a parse tree produced by YQLParser#table_hints.
	VisitTable_hints(ctx *Table_hintsContext) interface{}

	// Visit a parse tree produced by YQLParser#table_hint.
	VisitTable_hint(ctx *Table_hintContext) interface{}

	// Visit a parse tree produced by YQLParser#object_ref.
	VisitObject_ref(ctx *Object_refContext) interface{}

	// Visit a parse tree produced by YQLParser#simple_table_ref_core.
	VisitSimple_table_ref_core(ctx *Simple_table_ref_coreContext) interface{}

	// Visit a parse tree produced by YQLParser#simple_table_ref.
	VisitSimple_table_ref(ctx *Simple_table_refContext) interface{}

	// Visit a parse tree produced by YQLParser#into_simple_table_ref.
	VisitInto_simple_table_ref(ctx *Into_simple_table_refContext) interface{}

	// Visit a parse tree produced by YQLParser#delete_stmt.
	VisitDelete_stmt(ctx *Delete_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#update_stmt.
	VisitUpdate_stmt(ctx *Update_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#set_clause_choice.
	VisitSet_clause_choice(ctx *Set_clause_choiceContext) interface{}

	// Visit a parse tree produced by YQLParser#set_clause_list.
	VisitSet_clause_list(ctx *Set_clause_listContext) interface{}

	// Visit a parse tree produced by YQLParser#set_clause.
	VisitSet_clause(ctx *Set_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#set_target.
	VisitSet_target(ctx *Set_targetContext) interface{}

	// Visit a parse tree produced by YQLParser#multiple_column_assignment.
	VisitMultiple_column_assignment(ctx *Multiple_column_assignmentContext) interface{}

	// Visit a parse tree produced by YQLParser#set_target_list.
	VisitSet_target_list(ctx *Set_target_listContext) interface{}

	// Visit a parse tree produced by YQLParser#create_topic_stmt.
	VisitCreate_topic_stmt(ctx *Create_topic_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_topic_entries.
	VisitCreate_topic_entries(ctx *Create_topic_entriesContext) interface{}

	// Visit a parse tree produced by YQLParser#create_topic_entry.
	VisitCreate_topic_entry(ctx *Create_topic_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#with_topic_settings.
	VisitWith_topic_settings(ctx *With_topic_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_stmt.
	VisitAlter_topic_stmt(ctx *Alter_topic_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_action.
	VisitAlter_topic_action(ctx *Alter_topic_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_add_consumer.
	VisitAlter_topic_add_consumer(ctx *Alter_topic_add_consumerContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_create_consumer_entry.
	VisitTopic_create_consumer_entry(ctx *Topic_create_consumer_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_alter_consumer.
	VisitAlter_topic_alter_consumer(ctx *Alter_topic_alter_consumerContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_alter_consumer_entry.
	VisitAlter_topic_alter_consumer_entry(ctx *Alter_topic_alter_consumer_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_drop_consumer.
	VisitAlter_topic_drop_consumer(ctx *Alter_topic_drop_consumerContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_alter_consumer_set.
	VisitTopic_alter_consumer_set(ctx *Topic_alter_consumer_setContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_alter_consumer_reset.
	VisitTopic_alter_consumer_reset(ctx *Topic_alter_consumer_resetContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_set_settings.
	VisitAlter_topic_set_settings(ctx *Alter_topic_set_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_topic_reset_settings.
	VisitAlter_topic_reset_settings(ctx *Alter_topic_reset_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_topic_stmt.
	VisitDrop_topic_stmt(ctx *Drop_topic_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_settings.
	VisitTopic_settings(ctx *Topic_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_settings_entry.
	VisitTopic_settings_entry(ctx *Topic_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_setting_value.
	VisitTopic_setting_value(ctx *Topic_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_consumer_with_settings.
	VisitTopic_consumer_with_settings(ctx *Topic_consumer_with_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_consumer_settings.
	VisitTopic_consumer_settings(ctx *Topic_consumer_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_consumer_settings_entry.
	VisitTopic_consumer_settings_entry(ctx *Topic_consumer_settings_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_consumer_setting_value.
	VisitTopic_consumer_setting_value(ctx *Topic_consumer_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_ref.
	VisitTopic_ref(ctx *Topic_refContext) interface{}

	// Visit a parse tree produced by YQLParser#topic_consumer_ref.
	VisitTopic_consumer_ref(ctx *Topic_consumer_refContext) interface{}

	// Visit a parse tree produced by YQLParser#null_treatment.
	VisitNull_treatment(ctx *Null_treatmentContext) interface{}

	// Visit a parse tree produced by YQLParser#filter_clause.
	VisitFilter_clause(ctx *Filter_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#window_name_or_specification.
	VisitWindow_name_or_specification(ctx *Window_name_or_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#window_name.
	VisitWindow_name(ctx *Window_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#window_clause.
	VisitWindow_clause(ctx *Window_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#window_definition_list.
	VisitWindow_definition_list(ctx *Window_definition_listContext) interface{}

	// Visit a parse tree produced by YQLParser#window_definition.
	VisitWindow_definition(ctx *Window_definitionContext) interface{}

	// Visit a parse tree produced by YQLParser#new_window_name.
	VisitNew_window_name(ctx *New_window_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#window_specification.
	VisitWindow_specification(ctx *Window_specificationContext) interface{}

	// Visit a parse tree produced by YQLParser#window_specification_details.
	VisitWindow_specification_details(ctx *Window_specification_detailsContext) interface{}

	// Visit a parse tree produced by YQLParser#existing_window_name.
	VisitExisting_window_name(ctx *Existing_window_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#window_partition_clause.
	VisitWindow_partition_clause(ctx *Window_partition_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#window_order_clause.
	VisitWindow_order_clause(ctx *Window_order_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_clause.
	VisitWindow_frame_clause(ctx *Window_frame_clauseContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_units.
	VisitWindow_frame_units(ctx *Window_frame_unitsContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_extent.
	VisitWindow_frame_extent(ctx *Window_frame_extentContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_between.
	VisitWindow_frame_between(ctx *Window_frame_betweenContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_bound.
	VisitWindow_frame_bound(ctx *Window_frame_boundContext) interface{}

	// Visit a parse tree produced by YQLParser#window_frame_exclusion.
	VisitWindow_frame_exclusion(ctx *Window_frame_exclusionContext) interface{}

	// Visit a parse tree produced by YQLParser#use_stmt.
	VisitUse_stmt(ctx *Use_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#named_nodes_stmt.
	VisitNamed_nodes_stmt(ctx *Named_nodes_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#commit_stmt.
	VisitCommit_stmt(ctx *Commit_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#rollback_stmt.
	VisitRollback_stmt(ctx *Rollback_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#analyze_table.
	VisitAnalyze_table(ctx *Analyze_tableContext) interface{}

	// Visit a parse tree produced by YQLParser#analyze_table_list.
	VisitAnalyze_table_list(ctx *Analyze_table_listContext) interface{}

	// Visit a parse tree produced by YQLParser#analyze_stmt.
	VisitAnalyze_stmt(ctx *Analyze_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_sequence_stmt.
	VisitAlter_sequence_stmt(ctx *Alter_sequence_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_sequence_action.
	VisitAlter_sequence_action(ctx *Alter_sequence_actionContext) interface{}

	// Visit a parse tree produced by YQLParser#show_create_table_stmt.
	VisitShow_create_table_stmt(ctx *Show_create_table_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#create_secret_stmt.
	VisitCreate_secret_stmt(ctx *Create_secret_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#with_secret_settings.
	VisitWith_secret_settings(ctx *With_secret_settingsContext) interface{}

	// Visit a parse tree produced by YQLParser#secret_setting_entry.
	VisitSecret_setting_entry(ctx *Secret_setting_entryContext) interface{}

	// Visit a parse tree produced by YQLParser#secret_setting_value.
	VisitSecret_setting_value(ctx *Secret_setting_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#alter_secret_stmt.
	VisitAlter_secret_stmt(ctx *Alter_secret_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#drop_secret_stmt.
	VisitDrop_secret_stmt(ctx *Drop_secret_stmtContext) interface{}

	// Visit a parse tree produced by YQLParser#identifier.
	VisitIdentifier(ctx *IdentifierContext) interface{}

	// Visit a parse tree produced by YQLParser#id.
	VisitId(ctx *IdContext) interface{}

	// Visit a parse tree produced by YQLParser#id_schema.
	VisitId_schema(ctx *Id_schemaContext) interface{}

	// Visit a parse tree produced by YQLParser#id_expr.
	VisitId_expr(ctx *Id_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#id_expr_in.
	VisitId_expr_in(ctx *Id_expr_inContext) interface{}

	// Visit a parse tree produced by YQLParser#id_window.
	VisitId_window(ctx *Id_windowContext) interface{}

	// Visit a parse tree produced by YQLParser#id_table.
	VisitId_table(ctx *Id_tableContext) interface{}

	// Visit a parse tree produced by YQLParser#id_without.
	VisitId_without(ctx *Id_withoutContext) interface{}

	// Visit a parse tree produced by YQLParser#id_hint.
	VisitId_hint(ctx *Id_hintContext) interface{}

	// Visit a parse tree produced by YQLParser#id_as_compat.
	VisitId_as_compat(ctx *Id_as_compatContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id.
	VisitAn_id(ctx *An_idContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_or_type.
	VisitAn_id_or_type(ctx *An_id_or_typeContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_schema.
	VisitAn_id_schema(ctx *An_id_schemaContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_expr.
	VisitAn_id_expr(ctx *An_id_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_expr_in.
	VisitAn_id_expr_in(ctx *An_id_expr_inContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_window.
	VisitAn_id_window(ctx *An_id_windowContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_table.
	VisitAn_id_table(ctx *An_id_tableContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_without.
	VisitAn_id_without(ctx *An_id_withoutContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_hint.
	VisitAn_id_hint(ctx *An_id_hintContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_pure.
	VisitAn_id_pure(ctx *An_id_pureContext) interface{}

	// Visit a parse tree produced by YQLParser#an_id_as_compat.
	VisitAn_id_as_compat(ctx *An_id_as_compatContext) interface{}

	// Visit a parse tree produced by YQLParser#view_name.
	VisitView_name(ctx *View_nameContext) interface{}

	// Visit a parse tree produced by YQLParser#opt_id_prefix.
	VisitOpt_id_prefix(ctx *Opt_id_prefixContext) interface{}

	// Visit a parse tree produced by YQLParser#cluster_expr.
	VisitCluster_expr(ctx *Cluster_exprContext) interface{}

	// Visit a parse tree produced by YQLParser#id_or_type.
	VisitId_or_type(ctx *Id_or_typeContext) interface{}

	// Visit a parse tree produced by YQLParser#opt_id_prefix_or_type.
	VisitOpt_id_prefix_or_type(ctx *Opt_id_prefix_or_typeContext) interface{}

	// Visit a parse tree produced by YQLParser#id_or_at.
	VisitId_or_at(ctx *Id_or_atContext) interface{}

	// Visit a parse tree produced by YQLParser#id_table_or_type.
	VisitId_table_or_type(ctx *Id_table_or_typeContext) interface{}

	// Visit a parse tree produced by YQLParser#id_table_or_at.
	VisitId_table_or_at(ctx *Id_table_or_atContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword.
	VisitKeyword(ctx *KeywordContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_expr_uncompat.
	VisitKeyword_expr_uncompat(ctx *Keyword_expr_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_table_uncompat.
	VisitKeyword_table_uncompat(ctx *Keyword_table_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_select_uncompat.
	VisitKeyword_select_uncompat(ctx *Keyword_select_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_alter_uncompat.
	VisitKeyword_alter_uncompat(ctx *Keyword_alter_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_in_uncompat.
	VisitKeyword_in_uncompat(ctx *Keyword_in_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_window_uncompat.
	VisitKeyword_window_uncompat(ctx *Keyword_window_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_hint_uncompat.
	VisitKeyword_hint_uncompat(ctx *Keyword_hint_uncompatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_as_compat.
	VisitKeyword_as_compat(ctx *Keyword_as_compatContext) interface{}

	// Visit a parse tree produced by YQLParser#keyword_compat.
	VisitKeyword_compat(ctx *Keyword_compatContext) interface{}

	// Visit a parse tree produced by YQLParser#type_id.
	VisitType_id(ctx *Type_idContext) interface{}

	// Visit a parse tree produced by YQLParser#bool_value.
	VisitBool_value(ctx *Bool_valueContext) interface{}

	// Visit a parse tree produced by YQLParser#real.
	VisitReal(ctx *RealContext) interface{}

	// Visit a parse tree produced by YQLParser#integer.
	VisitInteger(ctx *IntegerContext) interface{}

}